const sections = document.querySelectorAll("header > section");
const buttons = document.querySelectorAll("nav ul li button");
const menuButton = buttons[2];
const menuIcon = menuButton.querySelector("img");

const hamburgerIcon = "images/Icons/equal_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
const closeIcon = "images/Icons/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";

// standaard alle sections aria-hidden true
sections.forEach(s => s.setAttribute("aria-hidden", "true"));

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let section = sections[index];
    let isOpen = section.classList.contains("open");
    let somethingOpen = false;
    
    // check of er nu iets open is
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].classList.contains("open")) {
        somethingOpen = true;
        break;
      }
    }

    // alles sluiten
    sections.forEach(s => {
      s.classList.remove("open");
      s.setAttribute("aria-hidden", "true");
    });

    if (button === menuButton) {
      if (somethingOpen) {
        // kruisje geklikt -> alles dicht + hamburger terug
        menuIcon.src = hamburgerIcon;
      } else {
        // hamburger geklikt -> menu openen
        section.classList.add("open");
        section.setAttribute("aria-hidden", "false");
        menuIcon.src = closeIcon;
      }
    } else {
      if (!isOpen) {
        // andere knop openen
        section.classList.add("open");
        section.setAttribute("aria-hidden", "false");
        menuIcon.src = closeIcon;
      } else {
        // zelfde knop sluiten
        menuIcon.src = hamburgerIcon;
      }
    }

    let input = section.querySelector("input[type=text]");
    if (input) {
      input.focus();
    }
  });
});

// ecc sluit open section
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    sections.forEach(s => {
      s.classList.remove("open");
      s.setAttribute("aria-hidden", "true");
    });
    menuIcon.src = hamburgerIcon;
  }
});