const makeupArtists = {
  "madhya-pradesh": {
    indore: [
      {
        name: "Glamour Artistry",
        description: "Transforming your beauty with expert makeup techniques.",
        experience: "6 years",
        price: "10,000",
        rating: 4.7,
        image: "m-1.jpg"
      },
      {
        name: "Radiance Makeup Studio",
        description: "Bringing out your natural beauty with precision and elegance.",
        experience: "4 years",
        price: "8,000",
        rating: 4.6,
        image: "m-2.jpg"
      }
    ],
    bhopal: [
      {
        name: "Beauty by Priya",
        description: "Your go-to makeup artist for stunning bridal looks.",
        experience: "5 years",
        price: "9,500",
        rating: 4.8,
        image: "m-3.jpg"
      }
    ]
  },
  maharashtra: {
    pune: [
      {
        name: "Flawless Faces",
        description: "Bridal makeup that enhances your natural charm.",
        experience: "7 years",
        price: "12,000",
        rating: 4.9,
        image: "m-4.jpg"
      }
    ],
    mumbai: [
      {
        name: "The Makeup Boutique",
        description: "Professional makeup services for your big day.",
        experience: "9 years",
        price: "15,000",
        rating: 4.7,
        image: "m-2.jpg"
      }
    ]
  }
};

const stateSelect = document.getElementById("makeup-artist-state");
const citySelect = document.getElementById("makeup-artist-city");
const listContainer = document.getElementById("makeup-artist-list");

// Event listener for state selection
stateSelect.addEventListener("change", () => {
  const state = stateSelect.value;

  // Clear city options and makeup artist list
  citySelect.innerHTML = '<option value="">-- Choose City --</option>';
  listContainer.innerHTML = ""; 

  if (state && makeupArtists[state]) {
    // Enable the city select dropdown
    citySelect.disabled = false;

    // Populate cities for selected state
    Object.keys(makeupArtists[state]).forEach(city => {
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

  listContainer.innerHTML = "";  // Clear previous makeup artist list

  if (state && city && makeupArtists[state][city]) {
    makeupArtists[state][city].forEach(ma => {
      const card = document.createElement("div");
      card.className = "makeup-artist-card";

      card.innerHTML = `
        <img src="${ma.image}" alt="${ma.name}">
        <div class="makeup-artist-info">
          <h3>${ma.name}</h3>
          <p>${ma.description}</p>
          <p><strong>Experience:</strong> ${ma.experience}</p>
          <p><strong>Price:</strong> ₹${ma.price}</p>
          <p><strong>Rating:</strong> ⭐ ${ma.rating}</p>
          <button class="book-btn">Book Now</button>
        </div>
      `;

      const button = card.querySelector(".book-btn");
      button.addEventListener("click", () => {
        alert(`Booking request sent for ${ma.name}`);
      });

      listContainer.appendChild(card);
    });

    listContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    listContainer.innerHTML = "<p>No makeup artists found in this city.</p>";
  }
});
