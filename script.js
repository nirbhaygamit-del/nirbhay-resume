// NIRBHAY GAMIT PORTFOLIO SCRIPT

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// CATEGORY DATA (All 5 posters moved to the "posters" section)
const portfolioData = {
  "social-media": {
    title: "Social Media Design.",
    description: "Creative social media visuals designed to communicate, engage and inspire.",
    projects: [
      // Leave empty or add separate social media graphics here if needed
    ]
  },
  "posters": {
    title: "Poster & Banner Design.",
    description: "Impactful poster compositions with strong visual hierarchy.",
    projects: [
      { name: "Coffee Poster", image: "assets/coffee_poster.png", type: "Poster Design" },
      { name: "Cold Drink Poster", image: "assets/colddrink_poster.jpg.jpeg", type: "Poster Design" },
      { name: "Hoodie Poster", image: "assets/hoodie_poster.jpg.jpeg", type: "Poster Design" },
      { name: "Controller Poster", image: "assets/controller_poster.jpg.jpeg", type: "Poster Design" },
      { name: "Skin Serum Poster", image: "assets/skinserum_poster.jpg.jpeg", type: "Poster Design" }
    ]
  },
  "logos": {
    title: "Logo Design.",
    description: "Simple and memorable logo concepts built around visual clarity.",
    projects: [
       { name: "NRG logo Logo", image: "assets/logos/nrg_logo.jpg.jpeg", type: "Tea Logo Design" },
      { name: "Pizza logo", image: "assets/logos/pizza_logo.jpg", type: "Pizza Logo Design" },
      { name: "Tea logo", image: "assets/logos/tea_logo.jpg", type: "Tea Logo Design" },
      { name: "Wave logo", image: "assets/logos/wave_logo.jpg", type: "Wave logo Design" },
    ]
  },
  "branding": {
    title: "Brand Identity.",
    description: "Visual identities that help brands communicate their personality.",
    projects: [
      { name: "Shop Brand Identity", image: "assets/branding/matcha_branding.jpg", type: "Brand Identity" },
      { name: "Brand kit Identity", image: "assets/branding/brand_kit_design.jpg", type: "Brand Identity" },
      { name: "Shop Brand Identity", image: "assets/branding/kit_de_marca_tacos.jpg", type: "Brand Identity" },
      { name: "Local ingredients Brand Identity", image: "assets/branding/LOTE_branding.jpg", type: "Brand Identity" },
      { name: "Bar Brand Identity", image: "assets/branding/salad_bar.jpg", type: "Brand Identity" }
    ]
  },
  "typography": {
    title: "Typography & Layout.",
    description: "Explorations of type, composition and editorial design.",
    projects: [
      { name: "Typography Exploration", image: "assets/typography/design1.jpg", type: "Typography" }
    ]
  },
  "uiux": {
    title: "UI/UX Design.",
    description: "Clean digital interfaces designed for usability and visual clarity.",
    projects: [
      { name: "Website UI Concept", image: "assets/uiux/shoe_shop.png", type: "UI/UX Design" },
      { name: "Website UI Concept", image: "assets/uiux/music_web.png", type: "UI/UX Design" },
      { name: "Website UI Concept", image: "assets/uiux/tea_stall.png", type: "UI/UX Design" }
    ]
  }
};

// HANDLE DYNAMIC PORTFOLIO PAGE LOADING
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const categoryTitle = document.getElementById("category-title");
const categoryDescription = document.getElementById("category-description");
const projectContainer = document.getElementById("project-container");

if (categoryTitle && categoryDescription && projectContainer) {
  const selectedCategory = portfolioData[category];

  if (!selectedCategory) {
    categoryTitle.textContent = "Choose a portfolio category.";
    categoryDescription.textContent = "Use the Expertise section on the homepage to browse projects.";
    projectContainer.innerHTML = '<div class="empty-state"><p>This category is unavailable.</p><a href="index.html#skills">Return to Expertise ↗</a></div>';
  } else {
    categoryTitle.textContent = selectedCategory.title;
    categoryDescription.textContent = selectedCategory.description;
    document.title = `${selectedCategory.title} | Nirbhay Gamit`;

    if (selectedCategory.projects.length === 0) {
      projectContainer.innerHTML = '<div class="empty-state"><p>No projects added in this category yet.</p><a href="index.html#skills">Return to Expertise ↗</a></div>';
    } else {
      selectedCategory.projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-item";

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.name;
        img.loading = "lazy";
        img.addEventListener("error", () => {
          img.hidden = true;
          const missing = document.createElement("div");
          missing.className = "missing-image";
          missing.textContent = `Add your image file: ${project.image}`;
          card.insertBefore(missing, card.firstChild);
        }, { once: true });

        const heading = document.createElement("h3");
        heading.textContent = project.name;
        const description = document.createElement("p");
        description.textContent = project.type;

        card.append(img, heading, description);
        projectContainer.appendChild(card);
      });
    }
  }
}

// CONTACT MODAL TOGGLE SCRIPT
const openModalBtn = document.getElementById("open-contact-modal");
const closeModalBtn = document.getElementById("close-modal");
const contactModal = document.getElementById("contact-modal");

if (openModalBtn && closeModalBtn && contactModal) {
  openModalBtn.addEventListener("click", () => {
    contactModal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.style.display = "none";
    }
  });
}