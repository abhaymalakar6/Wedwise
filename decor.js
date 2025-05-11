const decor = {
  "madhya-pradesh": {
    indore: [
      {
        name: "Royal Flower Decor",
        description: "Elegant floral decoration with fresh blooms for your wedding.",
        price: "25,000",
        rating: 4.8,
        features: ["Flower Decor", "Arch Setup", "Centerpieces"],
        image: "D-1.jpg"
      },
      {
        name: "Modern Elegance",
        description: "Chic and modern wedding decor with metallic accents and LED lights.",
        price: "30,000",
        rating: 4.7,
        features: ["Metallic Decor", "LED Lighting", "Customized Themes"],
        image: "d-2.jpg"
      }
    ],
    bhopal: [
      {
        name: "Heritage Weddings",
        description: "Classic and royal heritage decor for your wedding day.",
        price: "28,000",
        rating: 4.9,
        features: ["Heritage Style", "Traditional Drapes", "Royal Theme"],
        image: "path-to-image/heritage-weddings.jpg"
      }
    ]
  },
  "maharashtra": {
    pune: [
      {
        name: "Fiesta Decor",
        description: "Glamorous and festive decor for the wedding of your dreams.",
        price: "32,000",
        rating: 4.6,
        features: ["Glamour Decor", "Stage Setup", "Personalized Decor"],
        image: "path-to-image/fiesta-decor.jpg"
      }
    ],
    mumbai: [
      {
        name: "Beachside Bliss",
        description: "Elegant beachside wedding decor with a tropical vibe.",
        price: "35,000",
        rating: 5.0,
        features: ["Beach Decor", "Palm Trees", "Tropical Flowers"],
        image: "path-to-image/beachside-bliss.jpg"
      }
    ]
  }
};

const stateSelect = document.getElementById("state-select");
const citySelect = document.getElementById("city-select");
const decorList = document.getElementById("decor-list");

const modal = document.getElementById("decor-modal");
const closeModal = document.getElementById("close-modal");

const modalDecorName = document.getElementById("modal-decor-name");
const modalDecorRating = document.getElementById("modal-decor-rating");
const modalDecorImage = document.getElementById("modal-decor-image");
const modalDecorDescription = document.getElementById("modal-decor-description");
const modalDecorPrice = document.getElementById("modal-decor-price");
const modalDecorFeatures = document.getElementById("modal-decor-features");

// Event listener for state change
stateSelect.addEventListener("change", () => {
  const state = stateSelect.value;

  // Clear out the city dropdown and decor list
  citySelect.innerHTML = '<option value="">-- Choose City --</option>';
  decorList.innerHTML = "";

  if (state && decor[state]) {
    citySelect.disabled = false;  // Enable the city dropdown if there are cities for the selected state

    // Populate the city dropdown with available cities for the selected state
    Object.keys(decor[state]).forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city.charAt(0).toUpperCase() + city.slice(1);
      citySelect.appendChild(option);
    });
  } else {
    citySelect.disabled = true;  // Disable city dropdown if no cities for the selected state
  }
});

// Event listener for city change
citySelect.addEventListener("change", () => {
  const state = stateSelect.value;
  const city = citySelect.value;

  // Clear out the decor list
  decorList.innerHTML = "";

  if (state && city && decor[state][city]) {
    // Populate the decor cards based on the selected state and city
    decor[state][city].forEach(decorService => {
      const card = document.createElement("div");
      card.className = "decor-card";

      const featureList = decorService.features
        .map(feature => `<span>${feature}</span>`)
        .join(" · ");

      const cardImage = decorService.image ? `<img src="${decorService.image}" alt="${decorService.name}" class="decor-image" />` : "";

      card.innerHTML = `
        ${cardImage}
        <h3>${decorService.name} <span style="float:right; font-size:14px;">⭐ ${decorService.rating}</span></h3>
        <p>${decorService.description}</p>
        <p><strong>Starting from:</strong> ₹${decorService.price}</p>
        <p class="decor-features">${featureList}</p>
        <button class="view-details-btn">View Details</button>
      `;

      const button = card.querySelector(".view-details-btn");
      button.addEventListener("click", () => {
        // Show modal with decor details
        modalDecorName.textContent = decorService.name;
        modalDecorRating.textContent = `⭐ ${decorService.rating}`;
        modalDecorImage.src = decorService.image;
        modalDecorDescription.textContent = decorService.description;
        modalDecorPrice.textContent = `₹${decorService.price}`;
        modalDecorFeatures.textContent = decorService.features.join(", ");
        
        modal.style.display = "block";  // Display the modal
      });

      decorList.appendChild(card);
    });

    // Scroll to decor section
    decorList.scrollIntoView({ behavior: "smooth" });
  } else {
    decorList.innerHTML = "<p>No decor services available in this city yet.</p>";
  }
});

// Close the modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
