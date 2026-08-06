// ==========================================================
// Tristan Bernier Portfolio
// Landing Page
// home/home.js
// ==========================================================

const interactiveSurfaces = document.querySelectorAll(".portal-surface");

interactiveSurfaces.forEach(surface => {

    surface.addEventListener("pointermove", (e) => {

        const rect = surface.getBoundingClientRect();

        surface.style.setProperty(
            "--mx",
            `${e.clientX - rect.left}px`
        );

        surface.style.setProperty(
            "--my",
            `${e.clientY - rect.top}px`
        );

    });

    surface.addEventListener("pointerleave", () => {

        surface.style.setProperty("--mx", "50%");
        surface.style.setProperty("--my", "50%");

    });

});
