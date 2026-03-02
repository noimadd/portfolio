// featured projects data, used to generate project cards
const featured_projects = [
    {
        img: "/assets/featured/sheetsync.png",
        title: "SheetSync",
        type: "Web Application",
        stage: "In Development",
        version: "0.1.0",
        description: 
           `SheetSync is a web application designed to centralise and synchronise TTRPG character sheets.
            It allows players and dungeons masters to create, update, and access sheets in real-time, 
            improving clarity, and collaboration during gameplay.`,
        stack: ["Node.js", "EJS", "Express", "Socket.io", "PostgreSQL", "Redis", "Docker"],
        live: "https://sheetsync.noimad.dev",
        repo: "https://github.com/noimadd/sheetsync"
    },
    {
        img: "/assets/featured/sheetsync.png",
        title: "Personal Portfolio",
        type: "Web Application",
        stage: "In Development",
        version: "0.2.0",
        description:
           `This portfolio website is a personal project designed to showcase my skills, experience, and projects as a software developer.
            It also serves as a way for me to improve my design and frontend development skills,
            while providing a platform to present my work, and connect with others in the industry.`,
        stack: ["Node.js", "Express", "EJS", "CSS"],
        live: "https://noimad.dev",
        repo: "https://github.com/noimadd/portfolio"
    },
    {
        img: "/assets/featured/sheetsync.png",
        title: "Trial of Realms",
        type: "Game",
        stage: "Completed Prototype",
        version: "0.1.0",
        description:
           `Trial of Realms is a small terminal-based runescape esc game I created in order to learn Python.
            It features a simple combat system, and a variety of items, zones, and enemies to encounter, alongside
            a shop and a basic inventory system.`,
        stack: ["Python"],
        live: null,
        repo: "https://github.com/noimadd/trialOfRealms"
    },
    {
        img: "/assets/featured/sheetsync.png",
        title: "SuppSense",
        type: "Web Application",
        stage: "Completed Prototype",
        version: "1.0",
        description:
           `SuppSense was developed as a part of a group university project, and is a web application designed to provide users with a 
            platform to learn about the ingredients in their supplements, and make informed decisions about their health.`,
        stack: ["Node.js", "Express", "MySQL"],
        live: "https://suppsense.noimad.dev",
        repo: "https://github.com/noimadd/samSuppSense"
    },
    {
        img: "/assets/featured/sheetsync.png",
        title: "Trial of Realms 2.0",
        type: "Game",
        stage: "Planned",
        version: "0.0.0",
        description:
           `Trial of Realms 2.0 is a planned remake of the original Trial of Realms game,
            with a focus on developing a user interface, alongside improving the combat system, skills, and items,
            while also adding new content. Development of this project is planned to begin after the completion of SheetSync.`,
        stack: ["Node.js", "EJS", "Express", "Socket.io", "PostgreSQL", "Redis", "Docker"],
        live: null,
        repo: null
    },
    {
        img: "/assets/featured/sheetsync.png",
        title: "IronPlate",
        type: "Web Application",
        stage: "Planned",
        version: "0.0.0",
        description:
           `IronPlate is a planned web application designed to provide users with a platform to track their fitness progress, 
           and access workout plans and nutrition information. The motivation behind this project is to create a application
           that does not require a subscription, providing myself and others with a free alternative.
           
           Development of this prooject has been on hold for some time, but is planned to begin after the completion of SheetSync, either before or after Trial of Realms 2.0 depending on how I feel at the time.`,
        stack: ["Node.js", "EJS", "Express", "PostgreSQL", "Redis", "Docker"],
        live: null,
        repo: null
    }
];

// featured projects data, used to generate project cards in the featured section

const num_projects = featured_projects.length; // number of projects, used for clones and dots
const clones = num_projects * 2; // number of clones to be displayed either side of current cards

const carousel = document.getElementById("carousel"); // location to append project cards to
const dots = document.getElementById("carousel-dots"); // location to append carousel dots to

// generates new project card
function makeCard(project) {
    const newCard = document.createElement("div");
    newCard.className = "card project-container";
    newCard.id = project.title.toLowerCase();

    newCard.innerHTML = `
        <div class="project-image-container">
            <img src="${project.img}" alt="${project.title} project image" class="project-image">
            <div class="project-title">
                <h2>${project.title}</h2>
                <div class="project-type">
                    <div class="horizontal-line"></div> 
                    <p>${project.type}</p>
                </div>
            </div>
            <div class="project-stage overview-text">
                <p>${project.stage}</p>
            </div>
            <div class="project-version overview-text">
                <p>${project.version}</p>
            </div>
        </div>
        <div class="project-overview">
            <div class="project-description">
                <div class="project-description-section">
                    <h3>DESCRIPTION</h3>
                    <p>
                        ${project.description}
                    </p>
                </div>
                <div class="project-stack-section">
                    <h3>STACK</h3>
                    <ul>
                        ${project.stack.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="button-container">
                <a href="${project.live}" class="visit-site featured-button">
                    <span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                            <path d="M2 12h20"/>
                        </svg>
                    </span>
                    Visit Site
                </a>
                <a href="${project.repo}" class="view-code featured-button">
                    <span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code">
                            <path d="m16 18 6-6-6-6"/>
                            <path d="m8 6-6 6 6 6"/>
                        </svg>
                    </span>
                    View Code
                </a>
            </div>
        </div>
    `;

    return newCard;
}

// creates cards for each project + clones
for (let i = 0; i < clones; i++) {
    carousel.appendChild(makeCard(featured_projects[(num_projects - clones + i + num_projects * 100) % num_projects]));
}
for (let i = 0; i < num_projects; i++) {
    carousel.appendChild(makeCard(featured_projects[i]));

    const dot = document.createElement("div");
    dot.className = `carousel-dot${i === 0 ? " active" : ""}`;
    dot.addEventListener("click", () => goTo(clones + i));
    dots.appendChild(dot);
}
for (let i = 0; i < clones; i++) {
    carousel.appendChild(makeCard(featured_projects[i % num_projects]));
}

// calculates width of a card + gap
function cardWidth() {
    const first = carousel.children[0];
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;
    return first.getBoundingClientRect().width + gap;
}

// calcultes offset
function centerOffset() {
    const viewport_width  = carousel.parentElement.getBoundingClientRect().width;
    const card_width  = carousel.children[0]?.getBoundingClientRect().width ?? 0;
    return (viewport_width - card_width) / 2;
}

// calcultes translate x 
function txFor(pos) {
    return centerOffset() - pos * cardWidth();
}

let pos = clones; // current position
let tx  = 0; // how much to translate carousel by

// transform carousel to current position
function setTransform(currentX, animate = true) {
    tx = currentX;
    carousel.classList.toggle("animating", animate);
    carousel.style.transform = `translateX(${currentX}px)`;
}

// updates active dot
function updateDots() {
    const active = ((pos - clones) % num_projects + num_projects) % num_projects;
    dots.querySelectorAll(".carousel-dot").forEach((d, i) =>
        d.classList.toggle("active", i === active)
    );
}

// go to new position on dot click
function goTo(newPos) {
    pos = newPos;
    setTransform(txFor(pos), true);
    updateDots();
}

// loop carousel
carousel.addEventListener("transitionend", () => {
    carousel.classList.remove("animating");
    if (pos < clones) {
        pos += num_projects;
    } else if (pos >= clones + num_projects) {
        pos -= num_projects;
    }
    setTransform(txFor(pos), false);
    updateDots();
});

goTo(pos, false);

// drag/scrolling logic
let dragging = false; // self explanatory
let startX = 0; // mouse starting
let startTx = 0; // starting translate x of carousel

// start dragging
carousel.addEventListener("pointerdown", e => {
    dragging = true;
    startX = e.clientX;
    startTx = tx;
    carousel.classList.remove("animating");
    carousel.setPointerCapture(e.pointerId);
});

// drag carousel
carousel.addEventListener("pointermove", e => {
    if (!dragging) return;
    setTransform(startTx + (e.clientX - startX), false);
});

carousel.addEventListener("pointerup", endDrag); // end dragging
carousel.addEventListener("pointercancel", endDrag); // end drag on mouse error
carousel.addEventListener("dragstart", e => e.preventDefault()); // prevent drag on iamges

// end dragging and snap to closest card
function endDrag(e) {
    if (!dragging) return;
    dragging = false;

    const diff  = e.clientX - startX;
    const width = cardWidth();
    if (!width) return;

    const rawPos = (centerOffset() - tx) / width;

    if      (diff < -(width * 0.2)) goTo(Math.floor(rawPos) + 1);
    else if (diff >  (width * 0.2)) goTo(Math.ceil(rawPos)  - 1);
    else                             goTo(Math.round(rawPos));
}

window.addEventListener("resize", () => goTo(pos, false));