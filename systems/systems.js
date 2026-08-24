const portfolioBase =
    `${window.location.origin}/TristanPortfolio/frameworks/`;
const systems = {

    bootstrap: {
        title: "Bootstrap",
        framework: "bootstrap-framework",
        status: "active",
        statusLabel: "ACTIVE",

        role:
            "Central initialization. Loads registries and services before any gameplay system runs.",

        dependencies: [],

        usedBy: [
            "Service Layer"
        ],

        technologies: [
            "Async Loading",
            "Registries",
            "Service Locator"
        ],

        roadmap: [
            "Scene streaming hooks",
            "Error recovery"
        ]
    },


    services: {
        title: "Service Layer",
        framework: "service-framework",
        status: "development",
        statusLabel: "IN DEVELOPMENT",

        role:
            "Shared access point so systems can find each other without tight coupling.",

        dependencies: [
            "Bootstrap"
        ],

        usedBy: [
            "Asset Registry",
            "Event Bus",
            "Audio Service",
            "Weather",
            "AI Framework",
            "World Streaming",
            "Movement",
            "Combat",
            "Quest Framework",
            "Cinematics"
        ],

        technologies: [
            "Service Locator",
            "Dependency Injection"
        ],

        roadmap: [
            "Hot-swappable services"
        ]
    },


    assets: {
        title: "Asset Registry",
        framework: "assetregistry-framework",
        status: "development",
        statusLabel: "IN DEVELOPMENT",

        role:
            "Central registry for asset addresses, async loading, and reference tracking across systems.",

        dependencies: [
            "Bootstrap",
            "Service Layer"
        ],

        usedBy: [
            "World Streaming"
        ],

        technologies: [
            "Addressables",
            "Asset Bundles",
            "Reference Counting"
        ],

        roadmap: [
            "Hot-reload support",
            "Memory budgets"
        ]
    },


    eventbus: {
        title: "Event Bus",
        framework: "eventbus-framework",
        status: "development",
        statusLabel: "IN DEVELOPMENT",

        role:
            "Decoupled publish/subscribe messaging so systems can talk without direct references.",

        dependencies: [
            "Bootstrap",
            "Service Layer"
        ],

        usedBy: [
            "Audio Service",
            "AI Framework",
            "Combat",
            "Quest Framework",
            "Cinematics",
            "World State"
        ],

        technologies: [
            "Pub/Sub",
            "Channels",
            "Priority Queues"
        ],

        roadmap: [
            "Async event channels",
            "Debug event tracer"
        ]
    },


    audio: {
        title: "Audio Service",
        framework: "audio-framework",
        status: "development",
        statusLabel: "IN DEVELOPMENT",

        role:
            "Owns every audio event — SFX, music, ambient, voice — and routes them through a unified mixer.",

        dependencies: [
            "Bootstrap",
            "Service Layer",
            "Event Bus"
        ],

        usedBy: [
            "Weather",
            "Cinematics"
        ],

        technologies: [
            "FMOD / Unity Audio",
            "Mixer Snapshots",
            "Event Mapping"
        ],

        roadmap: [
            "Dynamic music layers",
            "3D spatial zones",
            "Voice ducking"
        ]
    },


    weather: {
        title: "Weather",
        framework: "weather-framework",
        status: "active",
        statusLabel: "ACTIVE",

        role:
            "Environmental simulation driven by biome profiles, HDRP, particles and audio.",

        dependencies: [
            "Bootstrap",
            "Service Layer",
            "Audio Service"
        ],

        usedBy: [
            "World State"
        ],

        technologies: [
            "HDRP",
            "Biomes",
            "Particles",
            "Audio"
        ],

        roadmap: [
            "Weather events",
            "Season system",
            "Quest overrides"
        ]
    },


    ai: {
        title: "AI Framework",
        framework: "ai-framework",
        status: "development",
        statusLabel: "IN DEVELOPMENT",

        role:
            "World-aware intelligence using shared blackboards and utility scoring.",

        dependencies: [
            "Bootstrap",
            "Service Layer",
            "World State",
            "Event Bus"
        ],

        usedBy: [
            "Combat",
            "World State"
        ],

        technologies: [
            "Blackboards",
            "Utility AI",
            "Event Driven"
        ],

        roadmap: [
            "Squad coordination",
            "Perception system"
        ]
    },


    terrain: {
        title: "World Streaming",
        framework: "streaming-framework",
        status: "planned",
        statusLabel: "PLANNED",

        role:
            "Streams and optimizes the handcrafted world as the player moves.",

        dependencies: [
            "Bootstrap",
            "Service Layer",
            "Asset Registry"
        ],

        usedBy: [
            "World State"
        ],

        technologies: [
            "LOD",
            "Streaming",
            "Occlusion"
        ],

        roadmap: [
            "Async chunk loading",
            "Occlusion culling"
        ]
    },


    movement: {
        title: "Movement",
        framework: "locomotion-framework",
        status: "development",
        statusLabel: "IN DEVELOPMENT",

        role:
            "Character locomotion, physics integration, collision and input routing.",

        dependencies: [
            "Bootstrap",
            "Service Layer"
        ],

        usedBy: [
            "Combat",
            "World State"
        ],

        technologies: [
            "Character Controller",
            "Physics",
            "Input System"
        ],

        roadmap: [
            "Advanced locomotion",
            "Camera shake",
            "Footstep decals"
        ]
    },


    combat: {
        title: "Combat",
        framework: "combat-framework",
        status: "planned",
        statusLabel: "PLANNED",

        role:
            "Ability execution, damage pipeline, hit detection and combat VFX.",

        dependencies: [
            "Bootstrap",
            "Service Layer",
            "AI Framework",
            "Movement",
            "Event Bus"
        ],

        usedBy: [
            "World State"
        ],

        technologies: [
            "Ability System",
            "Entity Pooling",
            "Animation SM"
        ],

        roadmap: [
            "Multi-target combat",
            "Impact decals",
            "Camera shake on hit"
        ]
    },


    quest: {
        title: "Quest Framework",
        framework: "quest-framework",
        status: "active",
        statusLabel: "ACTIVE",

        role:
            "Objective tracking, journal, dialogue branches and quest state machines.",

        dependencies: [
            "Bootstrap",
            "Service Layer",
            "Event Bus",
            "World State"
        ],

        usedBy: [
            "World State"
        ],

        technologies: [
            "Event Bus",
            "Serialization",
            "UI"
        ],

        roadmap: [
            "Dynamic quests",
            "NPC dialogue trees"
        ]
    },


    cinematics: {
        title: "Cinematics",
        framework: "cinematic-framework",
        status: "development",
        statusLabel: "IN DEVELOPMENT",

        role:
            "Timeline-driven sequences, camera control and narrative events.",

        dependencies: [
            "Bootstrap",
            "Service Layer",
            "Audio Service",
            "Event Bus"
        ],

        usedBy: [
            "World State"
        ],

        technologies: [
            "Timeline",
            "Cinemachine",
            "Dialogue"
        ],

        roadmap: [
            "Procedural cameras",
            "Shake profiles",
            "Skip/hold logic"
        ]
    },


    worldstate: {
        title: "World State",
        framework: "worldstate-framework",
        status: "planned",
        statusLabel: "PLANNED",

        role:
            "Central simulation hub. All systems read from and write to a shared consistent state.",

        dependencies: [
            "Weather",
            "AI Framework",
            "World Streaming",
            "Movement",
            "Combat",
            "Quest Framework",
            "Cinematics",
            "Event Bus"
        ],

        usedBy: [
            "Ashes World"
        ],

        technologies: [
            "Event Bus",
            "Shared State"
        ],

        roadmap: [
            "Save integration",
            "Time-of-day sync"
        ]
    },


    world: {
        title: "Ashes World",

        /*
         * This is NOT a framework page.
         * Therefore there is no framework URL.
         */
        framework: null,

        status: "development",
        statusLabel: "IN DEVELOPMENT",

        role:
            "The living world every system ultimately serves.",

        dependencies: [
            "World State"
        ],

        usedBy: [],

        technologies: [
            "Unity HDRP"
        ],

        roadmap: [
            "Vertical slice",
            "Playtesting"
        ]
    }

};


/* =========================================================
   HIGHLIGHT CHAINS
========================================================= */

const chains = {

    bootstrap: {
        nodes: [
            "bootstrap",
            "services"
        ]
    },

    services: {
        nodes: [
            "bootstrap",
            "services",
            "assets",
            "eventbus",
            "audio"
        ]
    },

    assets: {
        nodes: [
            "bootstrap",
            "services",
            "assets",
            "terrain",
            "worldstate",
            "world"
        ]
    },

    eventbus: {
        nodes: [
            "bootstrap",
            "services",
            "eventbus",
            "ai",
            "combat",
            "quest",
            "cinematics",
            "audio",
            "worldstate",
            "world"
        ]
    },

    audio: {
        nodes: [
            "bootstrap",
            "services",
            "eventbus",
            "audio",
            "weather",
            "cinematics",
            "worldstate",
            "world"
        ]
    },

    weather: {
        nodes: [
            "bootstrap",
            "services",
            "audio",
            "weather",
            "worldstate",
            "world"
        ]
    },

    ai: {
        nodes: [
            "bootstrap",
            "services",
            "eventbus",
            "ai",
            "worldstate",
            "world"
        ]
    },

    terrain: {
        nodes: [
            "bootstrap",
            "services",
            "assets",
            "terrain",
            "worldstate",
            "world"
        ]
    },

    movement: {
        nodes: [
            "bootstrap",
            "services",
            "movement",
            "worldstate",
            "world"
        ]
    },

    combat: {
        nodes: [
            "bootstrap",
            "services",
            "eventbus",
            "ai",
            "movement",
            "combat",
            "worldstate",
            "world"
        ]
    },

    quest: {
        nodes: [
            "bootstrap",
            "services",
            "eventbus",
            "quest",
            "worldstate",
            "world"
        ]
    },

    cinematics: {
        nodes: [
            "bootstrap",
            "services",
            "eventbus",
            "audio",
            "cinematics",
            "worldstate",
            "world"
        ]
    },

    worldstate: {
        nodes: [
            "weather",
            "ai",
            "terrain",
            "movement",
            "combat",
            "quest",
            "cinematics",
            "worldstate",
            "world"
        ]
    },

    world: {
        nodes: [
            "worldstate",
            "world"
        ]
    }

};


/* =========================================================
   TOPOLOGY
========================================================= */

const topology = [

    ["bootstrap", "services"],

    ["services", "assets"],
    ["services", "eventbus"],
    ["services", "audio"],

    ["assets", "terrain"],

    ["eventbus", "ai"],
    ["eventbus", "combat"],
    ["eventbus", "quest"],
    ["eventbus", "cinematics"],
    ["eventbus", "audio"],

    ["audio", "weather"],
    ["audio", "cinematics"],

    ["services", "weather"],
    ["services", "ai"],
    ["services", "terrain"],

    ["services", "movement"],
    ["services", "combat"],
    ["services", "quest"],
    ["services", "cinematics"],

    ["weather", "worldstate"],
    ["ai", "worldstate"],
    ["terrain", "worldstate"],

    ["movement", "worldstate"],
    ["combat", "worldstate"],
    ["quest", "worldstate"],
    ["cinematics", "worldstate"],

    ["worldstate", "world"]

];


/* =========================================================
   STATE
========================================================= */

let pinned = null;


/* =========================================================
   DOM
========================================================= */

const map =
    document.getElementById("map");

const svg =
    document.getElementById("svg");

const inspector =
    document.getElementById("inspector");

const nodes =
    [...document.querySelectorAll(".node")];

const nodeMap =
    Object.fromEntries(
        nodes.map(node => [
            node.dataset.system,
            node
        ])
    );


/* =========================================================
   GEOMETRY
========================================================= */

function relCenter(el) {

    const m =
        map.getBoundingClientRect();

    const r =
        el.getBoundingClientRect();

    return {
        x:
            r.left -
            m.left +
            r.width / 2,

        y:
            r.top -
            m.top +
            r.height / 2
    };
}


/* =========================================================
   CONNECTIONS
========================================================= */

function rebuildLines() {

    svg.innerHTML = "";

    topology.forEach(([from, to], i) => {

        const a =
            nodeMap[from];

        const b =
            nodeMap[to];

        if (!a || !b)
            return;


        const p1 =
            relCenter(a);

        const p2 =
            relCenter(b);


        /* MAIN CONNECTION */

        const line =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );

        line.setAttribute(
            "x1",
            p1.x
        );

        line.setAttribute(
            "y1",
            p1.y
        );

        line.setAttribute(
            "x2",
            p2.x
        );

        line.setAttribute(
            "y2",
            p2.y
        );

        line.setAttribute(
            "pathLength",
            "100"
        );

        line.classList.add(
            "connection"
        );

        line.dataset.from = from;
        line.dataset.to = to;

        line.id =
            "line-" + i;

        svg.appendChild(line);


        /* DEPENDENCY LINE */

        const dep =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );

        dep.setAttribute(
            "x1",
            p1.x
        );

        dep.setAttribute(
            "y1",
            p1.y
        );

        dep.setAttribute(
            "x2",
            p2.x
        );

        dep.setAttribute(
            "y2",
            p2.y
        );

        dep.classList.add(
            "dep"
        );

        dep.dataset.from = from;
        dep.dataset.to = to;

        svg.appendChild(dep);

    });


    requestAnimationFrame(() => {

        svg
            .querySelectorAll(".connection")
            .forEach(line => {

                line.classList.add(
                    "drawn"
                );

            });


        setTimeout(() => {

            svg
                .querySelectorAll(".connection")
                .forEach(line => {

                    line.classList.add(
                        "flowing"
                    );

                });

        }, 700);

    });

}


/* =========================================================
   INSPECTOR
========================================================= */

function renderInspector(id) {

    const d =
        systems[id];

    if (!d)
        return;


    document.getElementById(
        "title"
    ).textContent =
        d.title;


    document.getElementById(
        "insp-status"
    ).innerHTML =
        `
        <span class="dot dot-${d.status}"></span>
        ${d.statusLabel}
        `;


    document.getElementById(
        "description"
    ).textContent =
        d.role;


    /* DEPENDENCIES */

    const depsEl =
        document.getElementById(
            "deps"
        );

    const depsSec =
        document.getElementById(
            "deps-section"
        );

    depsEl.innerHTML = "";


    if (!d.dependencies.length) {

        depsSec.style.display =
            "none";

    } else {

        depsSec.style.display =
            "";

        d.dependencies.forEach(
            dependency => {

                const el =
                    document.createElement(
                        "div"
                    );

                el.className =
                    "tag";

                el.textContent =
                    dependency;

                depsEl.appendChild(el);

            }
        );

    }


    /* USED BY */

    const usedEl =
        document.getElementById(
            "usedby"
        );

    const usedSec =
        document.getElementById(
            "usedby-section"
        );

    usedEl.innerHTML = "";


    if (!d.usedBy || !d.usedBy.length) {

        usedSec.style.display =
            "none";

    } else {

        usedSec.style.display =
            "";

        d.usedBy.forEach(
            system => {

                const el =
                    document.createElement(
                        "div"
                    );

                el.className =
                    "tag";

                el.textContent =
                    system;

                usedEl.appendChild(el);

            }
        );

    }


    /* TECHNOLOGIES */

    const tags =
        document.getElementById(
            "tags"
        );

    tags.innerHTML = "";


    d.technologies.forEach(
        technology => {

            const el =
                document.createElement(
                    "div"
                );

            el.className =
                "tag";

            el.textContent =
                technology;

            tags.appendChild(el);

        }
    );


    /* ROADMAP */

    const road =
        document.getElementById(
            "roadmap"
        );

    road.innerHTML = "";


    d.roadmap.forEach(
        item => {

            const li =
                document.createElement(
                    "li"
                );

            li.textContent =
                item;

            road.appendChild(li);

        }
    );


    /* FRAMEWORK BUTTON */

/* =========================================================
   FRAMEWORK BUTTON
========================================================= */

const btn =
    document.getElementById(
        "open-btn"
    );

const frameworkURL =
    d.framework
        ? `${portfolioBase}${d.framework}`
        : null;


if (frameworkURL) {

    btn.disabled =
        false;

    btn.textContent =
        "OPEN FRAMEWORK →";

    btn.onclick =
        () => {
            window.location.href =
                frameworkURL;
        };

} else {

    btn.disabled =
        true;

    btn.textContent =
        "PAGE COMING SOON";

    btn.onclick =
        null;

}


    inspector.classList.add(
        "active"
    );

}


/* =========================================================
   INSPECTOR VISIBILITY
========================================================= */

function hideInspector() {

    if (pinned)
        return;

    inspector.classList.remove(
        "active"
    );

}


/* =========================================================
   HIGHLIGHT SYSTEM
========================================================= */

function applyHighlight(id) {

    const chain =
        chains[id];

    if (!chain)
        return;


    const set =
        new Set(chain.nodes);


    nodes.forEach(node => {

        const sid =
            node.dataset.system;


        if (set.has(sid)) {

            node.classList.add(
                "highlight"
            );

            node.classList.remove(
                "dim"
            );

        } else {

            node.classList.add(
                "dim"
            );

            node.classList.remove(
                "highlight"
            );

        }

    });


    svg
        .querySelectorAll(".connection")
        .forEach(line => {

            const keep =
                set.has(line.dataset.from) &&
                set.has(line.dataset.to);


            line.classList.toggle(
                "highlight",
                keep
            );

            line.classList.toggle(
                "dim",
                !keep
            );

        });


    svg
        .querySelectorAll(".dep")
        .forEach(line => {

            const keep =
                set.has(line.dataset.from) &&
                set.has(line.dataset.to);


            line.classList.toggle(
                "active",
                keep
            );

        });

}


/* =========================================================
   CLEAR HIGHLIGHT
========================================================= */

function clearHighlight() {

    nodes.forEach(node => {

        node.classList.remove(
            "dim",
            "highlight"
        );

    });


    svg
        .querySelectorAll(".connection")
        .forEach(line => {

            line.classList.remove(
                "dim",
                "highlight"
            );

        });


    svg
        .querySelectorAll(".dep")
        .forEach(line => {

            line.classList.remove(
                "active"
            );

        });

}


/* =========================================================
   MAP PAN
========================================================= */

function panTo(node) {

    if (!node) {

        map.style.transform =
            "";

        return;

    }


    const m =
        map.getBoundingClientRect();

    const r =
        node.getBoundingClientRect();


    const dx =
        (
            r.left +
            r.width / 2 -
            (
                m.left +
                m.width / 2
            )
        ) * 0.025;


    const dy =
        (
            r.top +
            r.height / 2 -
            (
                m.top +
                m.height / 2
            )
        ) * 0.025;


    map.style.transform =
        `
        scale(1.012)
        translate(${-dx}px,${-dy}px)
        `;

}


/* =========================================================
   NODE EVENTS
========================================================= */

nodes.forEach(node => {

    const id =
        node.dataset.system;


    /* HOVER */

    node.addEventListener(
        "mouseenter",
        () => {

            if (pinned)
                return;


            node.classList.add(
                "previewing"
            );


            renderInspector(id);

            applyHighlight(id);

            panTo(node);

        }
    );


    /* LEAVE */

    node.addEventListener(
        "mouseleave",
        () => {

            node.classList.remove(
                "previewing"
            );


            if (pinned)
                return;


            hideInspector();

            clearHighlight();

            panTo(null);

        }
    );


    /* CLICK */

    node.addEventListener(
        "click",
        e => {

            e.stopPropagation();


            nodes.forEach(
                n => {

                    n.classList.remove(
                        "pinned"
                    );

                }
            );


            pinned =
                id;


            node.classList.add(
                "pinned"
            );


            renderInspector(id);

            applyHighlight(id);

            panTo(node);

        }
    );


    /* KEYBOARD */

    node.addEventListener(
        "keydown",
        e => {

            if (
                e.key === "Enter" ||
                e.key === " "
            ) {

                e.preventDefault();

                node.click();

            }

        }
    );

});


/* =========================================================
   CLICK OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    e => {

        if (
            e.target.closest(".node") ||
            e.target.closest(".inspector")
        )
            return;


        nodes.forEach(
            node => {

                node.classList.remove(
                    "pinned"
                );

            }
        );


        pinned =
            null;


        hideInspector();

        clearHighlight();

        panTo(null);

    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

window.addEventListener(
    "load",
    rebuildLines
);


window.addEventListener(
    "resize",
    () => {

        rebuildLines();

        if (pinned)
            applyHighlight(pinned);

    }
);
