<script>
const portfolioBase = "/main/frameworks/";

const systems = {
  bootstrap: {
    title: "Bootstrap",
    framework: "bootstrap-framework",
    status: "active",
    statusLabel: "ACTIVE",
    role: "Central initialization. Loads registries and services before any gameplay system runs.",
    dependencies: [],
    usedBy: ["Service Layer"],
    technologies: ["Async Loading", "Registries", "Service Locator"],
    roadmap: ["Scene streaming hooks", "Error recovery"]
  },
  services: {
    title: "Service Layer",
    framework: "service-framework",
    status: "development",
    statusLabel: "IN DEVELOPMENT",
    role: "Shared access point so systems can find each other without tight coupling.",
    dependencies: ["Bootstrap"],
    usedBy: ["Asset Registry", "Event Bus", "Audio Service", "Weather", "AI Framework", "World Streaming", "Movement", "Combat", "Quest Framework", "Cinematics"],
    technologies: ["Service Locator", "Dependency Injection"],
    roadmap: ["Hot-swappable services"]
  },
  assets: {
    title: "Asset Registry",
    framework: "assetregistry-framework",
    status: "development",
    statusLabel: "IN DEVELOPMENT",
    role: "Central registry for asset addresses, async loading, and reference tracking across systems.",
    dependencies: ["Bootstrap", "Service Layer"],
    usedBy: ["World Streaming"],
    technologies: ["Addressables", "Asset Bundles", "Reference Counting"],
    roadmap: ["Hot-reload support", "Memory budgets"]
  },
  eventbus: {
    title: "Event Bus",
    framework: "eventbus-framework",
    status: "development",
    statusLabel: "IN DEVELOPMENT",
    role: "Decoupled publish/subscribe messaging so systems can talk without direct references.",
    dependencies: ["Bootstrap", "Service Layer"],
    usedBy: ["Audio Service", "AI Framework", "Combat", "Quest Framework", "Cinematics", "World State"],
    technologies: ["Pub/Sub", "Channels", "Priority Queues"],
    roadmap: ["Async event channels", "Debug event tracer"]
  },
  audio: {
    title: "Audio Service",
    framework: "audio-framework",
    status: "development",
    statusLabel: "IN DEVELOPMENT",
    role: "Owns every audio event — SFX, music, ambient, voice — and routes them through a unified mixer.",
    dependencies: ["Bootstrap", "Service Layer", "Event Bus"],
    usedBy: ["Weather", "Cinematics"],
    technologies: ["FMOD / Unity Audio", "Mixer Snapshots", "Event Mapping"],
    roadmap: ["Dynamic music layers", "3D spatial zones", "Voice ducking"]
  },
  weather: {
    title: "Weather",
    framework: "weather-framework",
    status: "active",
    statusLabel: "ACTIVE",
    role: "Environmental simulation driven by biome profiles, HDRP, particles and audio.",
    dependencies: ["Bootstrap", "Service Layer", "Audio Service"],
    usedBy: ["World State"],
    technologies: ["HDRP", "Biomes", "Particles", "Audio"],
    roadmap: ["Weather events", "Season system", "Quest overrides"]
  },
  ai: {
    title: "AI Framework",
    framework: "ai-framework",
    status: "development",
    statusLabel: "IN DEVELOPMENT",
    role: "World-aware intelligence using shared blackboards and utility scoring.",
    dependencies: ["Bootstrap", "Service Layer", "World State", "Event Bus"],
    usedBy: ["Combat", "World State"],
    technologies: ["Blackboards", "Utility AI", "Event Driven"],
    roadmap: ["Squad coordination", "Perception system"]
  },
  terrain: {
    title: "World Streaming",
    framework: "streaming-framework",
    status: "planned",
    statusLabel: "PLANNED",
    role: "Streams and optimizes the handcrafted world as the player moves.",
    dependencies: ["Bootstrap", "Service Layer", "Asset Registry"],
    usedBy: ["World State"],
    technologies: ["LOD", "Streaming", "Occlusion"],
    roadmap: ["Async chunk loading", "Occlusion culling"]
  },
  movement: {
    title: "Movement",
    framework: "locomotion-framework",
    status: "development",
    statusLabel: "IN DEVELOPMENT",
    role: "Character locomotion, physics integration, collision and input routing.",
    dependencies: ["Bootstrap", "Service Layer"],
    usedBy: ["Combat", "World State"],
    technologies: ["Character Controller", "Physics", "Input System"],
    roadmap: ["Advanced locomotion", "Camera shake", "Footstep decals"]
  },
  combat: {
    title: "Combat",
    framework: "combat-framework",
    status: "planned",
    statusLabel: "PLANNED",
    role: "Ability execution, damage pipeline, hit detection and combat VFX.",
    dependencies: ["Bootstrap", "Service Layer", "AI Framework", "Movement", "Event Bus"],
    usedBy: ["World State"],
    technologies: ["Ability System", "Entity Pooling", "Animation SM"],
    roadmap: ["Multi-target combat", "Impact decals", "Camera shake on hit"]
  },
  quest: {
    title: "Quest Framework",
    framework: "quest-framework",
    status: "active",
    statusLabel: "ACTIVE",
    role: "Objective tracking, journal, dialogue branches and quest state machines.",
    dependencies: ["Bootstrap", "Service Layer", "Event Bus", "World State"],
    usedBy: ["World State"],
    technologies: ["Event Bus", "Serialization", "UI"],
    roadmap: ["Dynamic quests", "NPC dialogue trees"]
  },
  cinematics: {
    title: "Cinematics",
    framework: "cinematic-framework",
    status: "development",
    statusLabel: "IN DEVELOPMENT",
    role: "Timeline-driven sequences, camera control and narrative events.",
    dependencies: ["Bootstrap", "Service Layer", "Audio Service", "Event Bus"],
    usedBy: ["World State"],
    technologies: ["Timeline", "Cinemachine", "Dialogue"],
    roadmap: ["Procedural cameras", "Shake profiles", "Skip/hold logic"]
  },
  worldstate: {
    title: "World State",
    framework: "worldstate-framework",
    status: "planned",
    statusLabel: "PLANNED",
    role: "Central simulation hub. All systems read from and write to a shared consistent state.",
    dependencies: ["Weather", "AI Framework", "World Streaming", "Movement", "Combat", "Quest Framework", "Cinematics", "Event Bus"],
    usedBy: ["Ashes World"],
    technologies: ["Event Bus", "Shared State"],
    roadmap: ["Save integration", "Time-of-day sync"]
  },
  world: {
    title: "Ashes World",
    framework: "ashes-world",
    status: "development",
    statusLabel: "IN DEVELOPMENT",
    role: "The living world every system ultimately serves.",
    dependencies: ["World State"],
    usedBy: [],
    technologies: ["Unity HDRP"],
    roadmap: ["Vertical slice", "Playtesting"]
  }
};

const chains = {
  bootstrap: { nodes: ["bootstrap", "services"] },
  services: { nodes: ["bootstrap", "services", "assets", "eventbus", "audio"] },
  assets: { nodes: ["bootstrap", "services", "assets", "terrain", "worldstate", "world"] },
  eventbus: { nodes: ["bootstrap", "services", "eventbus", "ai", "combat", "quest", "cinematics", "audio", "worldstate", "world"] },
  audio: { nodes: ["bootstrap", "services", "eventbus", "audio", "weather", "cinematics", "worldstate", "world"] },
  weather: { nodes: ["bootstrap", "services", "audio", "weather", "worldstate", "world"] },
  ai: { nodes: ["bootstrap", "services", "eventbus", "ai", "worldstate", "world"] },
  terrain: { nodes: ["bootstrap", "services", "assets", "terrain", "worldstate", "world"] },
  movement: { nodes: ["bootstrap", "services", "movement", "worldstate", "world"] },
  combat: { nodes: ["bootstrap", "services", "eventbus", "ai", "movement", "combat", "worldstate", "world"] },
  quest: { nodes: ["bootstrap", "services", "eventbus", "quest", "worldstate", "world"] },
  cinematics: { nodes: ["bootstrap", "services", "eventbus", "audio", "cinematics", "worldstate", "world"] },
  worldstate: { nodes: ["weather", "ai", "terrain", "movement", "combat", "quest", "cinematics", "worldstate", "world"] },
  world: { nodes: ["worldstate", "world"] }
};

const topology = [
  ["bootstrap", "services"],
  ["services", "assets"], ["services", "eventbus"], ["services", "audio"],
  ["assets", "terrain"],
  ["eventbus", "ai"], ["eventbus", "combat"], ["eventbus", "quest"], ["eventbus", "cinematics"], ["eventbus", "audio"],
  ["audio", "weather"], ["audio", "cinematics"],
  ["services", "weather"], ["services", "ai"], ["services", "terrain"],
  ["services", "movement"], ["services", "combat"], ["services", "quest"], ["services", "cinematics"],
  ["weather", "worldstate"], ["ai", "worldstate"], ["terrain", "worldstate"],
  ["movement", "worldstate"], ["combat", "worldstate"], ["quest", "worldstate"], ["cinematics", "worldstate"],
  ["worldstate", "world"]
];

let pinned = null;

const map = document.getElementById("map");
const svg = document.getElementById("svg");
const inspector = document.getElementById("inspector");
const nodes = [...document.querySelectorAll(".node")];
const nodeMap = Object.fromEntries(nodes.map(n => [n.dataset.system, n]));

function relCenter(el) {
  const m = map.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  return {
    x: r.left - m.left + r.width / 2,
    y: r.top - m.top + r.height / 2
  };
}

function rebuildLines() {
  if (!map || !svg) return;

  svg.innerHTML = "";

  topology.forEach(([from, to], i) => {
    const a = nodeMap[from];
    const b = nodeMap[to];
    if (!a || !b) return;

    const p1 = relCenter(a);
    const p2 = relCenter(b);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", p1.x);
    line.setAttribute("y1", p1.y);
    line.setAttribute("x2", p2.x);
    line.setAttribute("y2", p2.y);
    line.setAttribute("pathLength", "100");
    line.classList.add("connection");
    line.dataset.from = from;
    line.dataset.to = to;
    line.id = "line-" + i;
    svg.appendChild(line);

    const dep = document.createElementNS("http://www.w3.org/2000/svg", "line");
    dep.setAttribute("x1", p1.x);
    dep.setAttribute("y1", p1.y);
    dep.setAttribute("x2", p2.x);
    dep.setAttribute("y2", p2.y);
    dep.classList.add("dep");
    dep.dataset.from = from;
    dep.dataset.to = to;
    svg.appendChild(dep);
  });

  requestAnimationFrame(() => {
    svg.querySelectorAll(".connection").forEach(l => l.classList.add("drawn"));
    setTimeout(() => svg.querySelectorAll(".connection").forEach(l => l.classList.add("flowing")), 700);
  });
}

function renderInspector(id) {
  const d = systems[id];
  if (!d) return;

  const titleEl = document.getElementById("title");
  const statusEl = document.getElementById("insp-status");
  const descriptionEl = document.getElementById("description");
  const depsEl = document.getElementById("deps");
  const depsSec = document.getElementById("deps-section");
  const usedEl = document.getElementById("usedby");
  const usedSec = document.getElementById("usedby-section");
  const tags = document.getElementById("tags");
  const road = document.getElementById("roadmap");
  const btn = document.getElementById("open-btn");

  if (titleEl) titleEl.textContent = d.title;
  if (statusEl) statusEl.innerHTML = `<span class="dot dot-${d.status}"></span>${d.statusLabel}`;
  if (descriptionEl) descriptionEl.textContent = d.role;

  if (depsEl && depsSec) {
    depsEl.innerHTML = "";
    if (!d.dependencies.length) {
      depsSec.style.display = "none";
    } else {
      depsSec.style.display = "";
      d.dependencies.forEach(t => {
        const el = document.createElement("div");
        el.className = "tag";
        el.textContent = t;
        depsEl.appendChild(el);
      });
    }
  }

  if (usedEl && usedSec) {
    usedEl.innerHTML = "";
    if (!d.usedBy || !d.usedBy.length) {
      usedSec.style.display = "none";
    } else {
      usedSec.style.display = "";
      d.usedBy.forEach(t => {
        const el = document.createElement("div");
        el.className = "tag";
        el.textContent = t;
        usedEl.appendChild(el);
      });
    }
  }

  if (tags) {
    tags.innerHTML = "";
    d.technologies.forEach(t => {
      const el = document.createElement("div");
      el.className = "tag";
      el.textContent = t;
      tags.appendChild(el);
    });
  }

  if (road) {
    road.innerHTML = "";
    d.roadmap.forEach(r => {
      const li = document.createElement("li");
      li.textContent = r;
      road.appendChild(li);
    });
  }

  if (btn) {
    const frameworkURL = d.framework ? `${portfolioBase}${d.framework}/` : null;
    if (frameworkURL) {
      btn.disabled = false;
      btn.textContent = "OPEN FRAMEWORK →";
      btn.onclick = () => {
        window.location.href = frameworkURL;
      };
    } else {
      btn.disabled = true;
      btn.textContent = "PAGE COMING SOON";
      btn.onclick = null;
    }
  }

  if (inspector) inspector.classList.add("active");
}

function hideInspector() {
  if (pinned) return;
  if (inspector) inspector.classList.remove("active");
}

function applyHighlight(id) {
  const chain = chains[id];
  if (!chain) return;

  const set = new Set(chain.nodes);

  nodes.forEach(n => {
    const sid = n.dataset.system;
    if (set.has(sid)) {
      n.classList.add("highlight");
      n.classList.remove("dim");
    } else {
      n.classList.add("dim");
      n.classList.remove("highlight");
    }
  });

  svg.querySelectorAll(".connection").forEach(l => {
    const keep = set.has(l.dataset.from) && set.has(l.dataset.to);
    l.classList.toggle("highlight", keep);
    l.classList.toggle("dim", !keep);
  });

  svg.querySelectorAll(".dep").forEach(l => {
    const keep = set.has(l.dataset.from) && set.has(l.dataset.to);
    l.classList.toggle("active", keep);
  });
}

function clearHighlight() {
  nodes.forEach(n => n.classList.remove("dim", "highlight"));
  svg.querySelectorAll(".connection").forEach(l => l.classList.remove("dim", "highlight"));
  svg.querySelectorAll(".dep").forEach(l => l.classList.remove("active"));
}

function panTo(node) {
  if (!map) return;

  if (!node) {
    map.style.transform = "";
    return;
  }

  const m = map.getBoundingClientRect();
  const r = node.getBoundingClientRect();
  const dx = (r.left + r.width / 2 - (m.left + m.width / 2)) * 0.025;
  const dy = (r.top + r.height / 2 - (m.top + m.height / 2)) * 0.025;
  map.style.transform = `scale(1.012) translate(${-dx}px, ${-dy}px)`;
}

nodes.forEach(node => {
  const id = node.dataset.system;

  node.addEventListener("mouseenter", () => {
    if (pinned) return;
    node.classList.add("previewing");
    renderInspector(id);
    applyHighlight(id);
    panTo(node);
  });

  node.addEventListener("mouseleave", () => {
    node.classList.remove("previewing");
    if (pinned) return;
    hideInspector();
    clearHighlight();
    panTo(null);
  });

  node.addEventListener("click", e => {
    e.stopPropagation();
    nodes.forEach(n => n.classList.remove("pinned"));
    pinned = id;
    node.classList.add("pinned");
    renderInspector(id);
    applyHighlight(id);
    panTo(node);
  });

  node.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      node.click();
    }
  });
});

document.addEventListener("click", e => {
  if (e.target.closest(".node") || e.target.closest(".inspector")) return;
  nodes.forEach(n => n.classList.remove("pinned"));
  pinned = null;
  hideInspector();
  clearHighlight();
  panTo(null);
});

window.addEventListener("load", rebuildLines);

window.addEventListener("resize", () => {
  rebuildLines();
  if (pinned) applyHighlight(pinned);
});
</script>
