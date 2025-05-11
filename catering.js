const cateringData = {
  "madhya-pradesh": {
    indore: [
      {
        name: "Royal Tandoor Caterers",
        description: "Premium catering service offering Mughlai, Punjabi, and Jain menus.",
        price: "550",
        rating: 4.6,
        specialties: ["Live Counters", "Veg/Non-Veg", "Themed Buffets"],
        image: "c-5.jpg"
      },
      {
        name: "Shree Sweets & Caterers",
        description: "Traditional sweets and wedding food specialists.",
        price: "450",
        rating: 4.4,
        specialties: ["Pure Veg", "Sweets Buffet", "North Indian"],
        image: "c-2.jpg"
      }
    ]
  },
  "maharashtra": {
    mumbai: [
      {
        name: "Bayview Catering Co.",
        description: "Luxurious beachside catering with seafood and fusion dishes.",
        price: "850",
        rating: 4.8,
        specialties: ["Seafood", "Fusion", "Live Grill"],
        image: "c-6.jpg"
      }
    ]
  }
};

const stateSelect = document.getElementById("state-select");
const citySelect = document.getElementById("city-select");
const cateringList = document.getElementById("catering-list");

const modal = document.getElementById("catering-modal");
const closeModal = document.getElementById("close-modal");

const modalName = document.getElementById("modal-cater-name");
const modalRating = document.getElementById("modal-cater-rating");
const modalImage = document.getElementById("modal-cater-image");
const modalDescription = document.getElementById("modal-cater-description");
const modalPrice = document.getElementById("modal-cater-price");
const modalSpecialties = document.getElementById("modal-cater-specialties");

stateSelect.addEventListener("change", () => {
  const state = stateSelect.value;
  citySelect.innerHTML = '<option value="">-- Choose City --</option>';
  cateringList.innerHTML = "";

  if (state && cateringData[state]) {
    citySelect.disabled = false;
    Object.keys(cateringData[state]).forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city.charAt(0).toUpperCase() + city.slice(1);
      citySelect.appendChild(option);
    });
  } else {
    citySelect.disabled = true;
  }
});

citySelect.addEventListener("change", () => {
  const state = stateSelect.value;
  const city = citySelect.value;

  cateringList.innerHTML = "";

  if (state && city && cateringData[state][city]) {
    cateringData[state][city].forEach(service => {
      const card = document.createElement("div");
      card.className = "venue-card";

      const specialties = service.specialties.map(s => `<span>${s}</span>`).join(" · ");

      card.innerHTML = `
        <img src="${service.image}" alt="${service.name}" class="venue-image" />
        <h3>${service.name} <span style="float:right; font-size:14px;">⭐ ${service.rating}</span></h3>
        <p>${service.description}</p>
        <p><strong>Starting from:</strong> ₹${service.price} per plate</p>
        <p class="venue-features">${specialties}</p>
        <button class="view-details-btn">View Details</button>
      `;

      card.querySelector(".view-details-btn").addEventListener("click", () => {
        modalName.textContent = service.name;
        modalRating.textContent = `⭐ ${service.rating}`;
        modalImage.src = service.image;
        modalDescription.textContent = service.description;
        modalPrice.textContent = `₹${service.price} per plate`;
        modalSpecialties.textContent = service.specialties.join(", ");
        modal.style.display = "block";
      });

      cateringList.appendChild(card);
    });

    cateringList.scrollIntoView({ behavior: "smooth" });
  } else {
    cateringList.innerHTML = "<p>No catering services available in this city yet.</p>";
  }
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
