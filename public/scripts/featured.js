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
        img: "/assets/featured/placeholder.png",
        title: "Personal Portfolio",
        type: "Web Application",
        stage: "In Development",
        version: "0.4.0",
        description:
           `This portfolio website is a personal project designed to showcase my skills, experience, and projects as a software developer.
            It also serves as a way for me to improve my design and frontend development skills,
            while providing a platform to present my work, and connect with others in the industry.`,
        stack: ["Node.js", "Express", "EJS", "CSS"],
        live: "https://noimad.dev",
        repo: "https://github.com/noimadd/portfolio"
    },
    {
        img: "/assets/featured/placeholder.png",
        title: "Trial of Realms",
        type: "Game",
        stage: "Completed Prototype",
        version: "0.1.0",
        description:
           `Trial of Realms is a small terminal-based runescape esc game I created in order to learn Python.
            It features a simple combat system, and a variety of items, zones, and enemies to encounter, alongside
            a shop and a basic inventory system.`,
        stack: ["Python"],
        live: '',
        repo: "https://github.com/noimadd/trialOfRealms"
    },
    {
        img: "/assets/featured/placeholder.png",
        title: "SuppSense",
        type: "Web Application",
        stage: "Completed Prototype",
        version: "1.0",
        description:
           `SuppSense was developed as a part of a group university project, and is a web application designed to provide users with a 
            platform to learn about the ingredients in their supplements, and make informed decisions about their health.`,
        stack: ["Node.js", "Express", "MySQL"],
        live: "",
        repo: "https://github.com/noimadd/samSuppSense"
    },
    {
        img: "/assets/featured/placeholder.png",
        title: "Trial of Realms 2.0",
        type: "Game",
        stage: "Planned",
        version: "0.0.0",
        description:
           `Trial of Realms 2.0 is a planned remake of the original Trial of Realms game,
            with a focus on developing a user interface, alongside improving the combat system, skills, and items,
            while also adding new content. Development of this project is planned to begin after the completion of SheetSync.`,
        stack: ["Node.js", "EJS", "Express", "Socket.io", "PostgreSQL", "Redis", "Docker"],
        live: '',
        repo: ''
    },
    {
        img: "/assets/featured/placeholder.png",
        title: "IronPlate",
        type: "Web Application",
        stage: "Planned",
        version: "0.0.0",
        description:
           `IronPlate is a planned web application designed to provide users with a platform to track their fitness progress, 
           and access workout plans and nutrition information. I want to create this project so that I can stop paying 
           for my current fitness app.
           <br>
           Development of this project has been on hold for some time, as I continue to find 'better' ways to develop it. 
           I plan to continue either before or after Trial of Realms 2.0`,
        stack: ["Node.js", "EJS", "Express", "PostgreSQL", "Redis", "Docker"],
        live: '',
        repo: ''
    }
];

// featured projects data, used to generate project cards in the featured section

const num_projects = featured_projects.length; // number of projects, used for dots

const carousel = document.getElementById("carousel"); // location to append project cards to
const dots = document.getElementById("carousel-dots"); // location to append carousel dots to

// generates new project card
function makeCard(project) {
    const newCard = document.createElement("div");
    newCard.className = "card project-container";
    let titleId = project.title.toLowerCase().replace(/\s+/g, '-');
    newCard.id = titleId;

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
                <a href="${project.live}" ${project.live ? 'target="_blank"' : ''} class="visit-site featured-button" aria-label="Visit ${project.title} Site">
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
                <a href="${project.repo}" ${project.repo ? 'target="_blank"' : ''} class="view-code featured-button" aria-label="View ${project.title} Code">
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

// creates cards and dots for each project
for (let i = 0; i < num_projects; i++) {
    carousel.appendChild(makeCard(featured_projects[i]));

    const dot = document.createElement("div");
    dot.className = `carousel-dot${i === 0 ? " active" : ""}`;
    dot.addEventListener("click", () => goTo(i));
    dots.appendChild(dot);
}

// calculates the translateX needed to centre card at `pos` in the wrapper
function txFor(pos) {
    const card = carousel.children[pos];
    if (!card) return 0;
    const wrapperWidth = carousel.parentElement.offsetWidth;
    const cardW = card.offsetWidth;
    return (wrapperWidth / 2) - (card.offsetLeft + cardW / 2);
}

let pos = 0; // current position
let tx  = 0; // how much to translate carousel by

// transform carousel to current position
function setTransform(currentX, animate = true) {
    tx = currentX;
    carousel.classList.toggle("animating", animate);
    carousel.style.transform = `translateX(${currentX}px)`;
}

// updates active dot
function updateDots() {
    dots.querySelectorAll(".carousel-dot").forEach((d, i) =>
        d.classList.toggle("active", i === pos)
    );
    carousel.querySelectorAll(".card").forEach((card, i) => {
        card.classList.toggle("active", i === pos);
    });
}

// go to new position on dot click
function goTo(newPos) {
    pos = Math.max(0, Math.min(newPos, num_projects - 1)); // clamp to valid range
    setTransform(txFor(pos), true);
    updateDots();
}

goTo(pos);

const drag_deadzone = 20;

// drag/scrolling logic
let dragging = false; // self explanatory
let isDraggingActive = false; // whether dragging has passed the deadzone
let startX = 0; // mouse starting x position
let startY = 0; // mouse starting y position
let startTx = 0; // starting translate x of carousel

// start dragging
carousel.addEventListener("pointerdown", e => {
    if (e.target.closest('a, button')) return; // allows user to click links without interfering with dragging
    dragging = true;
    isDraggingActive = false;
    startX = e.clientX;
    startY = e.clientY;
    startTx = tx;
    carousel.setPointerCapture(e.pointerId);
});

// drag carousel
carousel.addEventListener("pointermove", e => {
    if (!dragging) return;

    const diffX = Math.abs(e.clientX - startX);
    const diffY = Math.abs(e.clientY - startY);
    
    if (!isDraggingActive) {
        if (diffX < drag_deadzone && diffY < drag_deadzone) return; // not enough movement yet
        
        if (diffY > diffX) {
            dragging = false;
            return;
        }
        
        isDraggingActive = true;
        carousel.classList.remove("animating");
    }

    setTransform(startTx + (e.clientX - startX), false);
});

carousel.addEventListener("pointerup", endDrag); // end dragging
carousel.addEventListener("pointercancel", endDrag); // end drag on mouse error
carousel.addEventListener("dragstart", e => e.preventDefault()); // prevent drag on images

// end dragging and snap to closest card
function endDrag(e) {
    if (!dragging) return;
    dragging = false;

    if (!isDraggingActive) {
        goTo(pos); 
        return;
    }

    const diff = e.clientX - startX;
    const cardW = carousel.children[0]?.offsetWidth || 0;
    if (!cardW) return;

    if (diff < -(cardW * 0.2)) {
        goTo(pos + 1);
    } else if (diff >  (cardW * 0.2)) {
        goTo(pos - 1);
    } else {
        goTo(pos);
    }
}

window.addEventListener("resize", () => goTo(pos));