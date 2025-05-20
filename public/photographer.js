const photographers = {
  "madhya-pradesh": {
    indore: [
      {
        name: "Lens King Studios",
        description: "Capturing timeless wedding memories with creativity and class.",
        experience: "8 years",
        price: "15,000",
        rating: 4.8,
        image: "p-1.jpg"
      },
      {
        name: "PixelCraft Weddings",
        description: "Documenting your big day with elegance and emotion.",
        experience: "5 years",
        price: "12,000",
        rating: 4.5,
        image: "p-2.jpg"
      }
    ],
    bhopal: [
      {
        name: "ShutterBloom Studio",
        description: "Expert in candid wedding photography and storytelling.",
        experience: "6 years",
        price: "13,000",
        rating: 4.6,
        image: "p-3.jpg"
      }
    ]
  },
  maharashtra: {
    pune: [
      {
        name: "The Wed Story",
        description: "Modern photography with cinematic wedding film packages.",
        experience: "10 years",
        price: "18,000",
        rating: 4.9,
        image: "p-4.jpg"
      }
    ],
    mumbai: [
      {
        name: "Capture Crew",
        description: "Award-winning team capturing soulful wedding moments.",
        experience: "7 years",
        price: "16,500",
        rating: 4.7,
        image: "p-2.jpg"
      }
    ]
  }
};

const stateSelect = document.getElementById("photographer-state");
const citySelect = document.getElementById("photographer-city");
const listContainer = document.getElementById("photographer-list");

// Event listener for state selection
stateSelect.addEventListener("change", () => {
  const state = stateSelect.value;

  // Clear city options and photographer list
  citySelect.innerHTML = '<option value="">-- Choose City --</option>';
  listContainer.innerHTML = ""; 

  if (state && photographers[state]) {
    // Enable the city select dropdown
    citySelect.disabled = false;

    // Populate cities for selected state
    Object.keys(photographers[state]).forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city.charAt(0).toUpperCase() + city.slice(1);  // Capitalize first letter of city
      citySelect.appendChild(option);
    });
  } else {
    // Disable city dropdown if no valid state is selected
    citySelect.disabled = true;
  }
});

// Event listener for city selection
citySelect.addEventListener("change", () => {
  const state = stateSelect.value;
  const city = citySelect.value;

  listContainer.innerHTML = "";  // Clear previous photographer list

  if (state && city && photographers[state][city]) {
    photographers[state][city].forEach(p => {
      const card = document.createElement("div");
      card.className = "photographer-card";

      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="photographer-info">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <p><strong>Experience:</strong> ${p.experience}</p>
          <p><strong>Price:</strong> ₹${p.price}</p>
          <p><strong>Rating:</strong> ⭐ ${p.rating}</p>
          <button class="book-btn">Book Now</button>
        </div>
      `;

      const button = card.querySelector(".book-btn");
      button.addEventListener("click", () => {
        alert(`Booking request sent for ${p.name}`);
      });

      listContainer.appendChild(card);
    });

    listContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    listContainer.innerHTML = "<p>No photographers found in this city.</p>";
  }
});
