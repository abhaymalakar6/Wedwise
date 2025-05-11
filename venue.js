const venues = {
  "madhya-pradesh": {
    indore: [
      {
        name: "Radisson Blu Hotel",
        description: "Radisson Blu Hotel, Indore is a grand five-star property, a luxurious venue to host your friends and family.",
        price: "6,500",
        rating: 4.7,
        features: ["Royal Decor", "Accommodation: 200", "In-house Catering"],
        images: ["radison.jpeg", "Ashokraj.jpg", "radison3.jpg"]
      },
      {
        name: "Ashokraj Resort And Farms",
        description: "Ashokraj Resort And Farms, Indore, is a wedding venue personifying brilliance.",
        price: "5,800",
        rating: 4.5,
        features: ["Banquet Hall", "Accommodation: 150", "Outdoor Space"],
        images: ["Ashokraj1.jpg", "Ashokraj2.jpg"]
      }
    ]
    // Add other cities similarly...
  }
};

const stateSelect = document.getElementById("state-select");
const citySelect = document.getElementById("city-select");
const venueList = document.getElementById("venue-list");

const modal = document.getElementById("venue-modal");
const closeModal = document.getElementById("close-modal");

const modalVenueName = document.getElementById("modal-venue-name");
const modalVenueRating = document.getElementById("modal-venue-rating");
const modalVenueDescription = document.getElementById("modal-venue-description");
const modalVenuePrice = document.getElementById("modal-venue-price");
const modalVenueFeatures = document.getElementById("modal-venue-features");

const carouselTrack = document.getElementById("carousel-track");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const bookingModal = document.getElementById("booking-modal");
const closeBookingModal = document.getElementById("close-booking-modal");
const bookingForm = document.getElementById("booking-form");

let selectedVenue = "";
let currentSlide = 0;

stateSelect.addEventListener("change", () => {
  const state = stateSelect.value;
  citySelect.innerHTML = '<option value="">-- Choose City --</option>';
  venueList.innerHTML = "";

  if (state && venues[state]) {
    citySelect.disabled = false;

    Object.keys(venues[state]).forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      citySelect.appendChild(option);
    });
  } else {
    citySelect.disabled = true;
  }
});

citySelect.addEventListener("change", () => {
  const state = stateSelect.value;
  const city = citySelect.value;
  venueList.innerHTML = "";

  if (state && city && venues[state][city]) {
    venues[state][city].forEach(venue => {
      const card = document.createElement("div");
      card.className = "venue-card";

      const featureList = venue.features.map(feature => `<span>${feature}</span>`).join(" · ");
      const cardImage = venue.images?.[0]
        ? `<img src="${venue.images[0]}" alt="${venue.name}" class="venue-image" />`
        : "";

      card.innerHTML = `
        ${cardImage}
        <h3>${venue.name} <span style="float:right; font-size:14px;">⭐ ${venue.rating}</span></h3>
        <p>${venue.description}</p>
        <p><strong>Starting from:</strong> ₹${venue.price}</p>
        <p class="venue-features">${featureList}</p>
        <button class="view-details-btn">View Details</button>
        <button class="book-now-btn" style="margin-top: 10px; background:#006C70;">Book Now</button>
      `;

      const viewButton = card.querySelector(".view-details-btn");
      viewButton.addEventListener("click", () => {
        modalVenueName.textContent = venue.name;
        modalVenueRating.textContent = `⭐ ${venue.rating}`;
        modalVenueDescription.textContent = venue.description;
        modalVenuePrice.textContent = `₹${venue.price}`;
        modalVenueFeatures.textContent = venue.features.join(", ");

        // Populate carousel
        carouselTrack.innerHTML = "";
        venue.images.forEach(imgSrc => {
          const img = document.createElement("img");
          img.src = imgSrc;
          carouselTrack.appendChild(img);
        });

        currentSlide = 0;
        updateCarousel();
        modal.style.display = "block";
      });

      const bookNowBtn = card.querySelector(".book-now-btn");
      bookNowBtn.addEventListener("click", () => {
        selectedVenue = venue.name;
        bookingModal.style.display = "block";
      });

      venueList.appendChild(card);
    });

    venueList.scrollIntoView({ behavior: "smooth" });
  } else {
    venueList.innerHTML = "<p>No venues available in this city yet.</p>";
  }
});

function updateCarousel() {
  const slideWidth = carouselTrack.clientWidth;
  carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  const totalSlides = carouselTrack.children.length;
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);

// Modal close
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
closeBookingModal.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

// Click outside to close
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
  if (event.target === bookingModal) {
    bookingModal.style.display = "none";
  }
});

// Booking form submit
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const date = document.getElementById("event-date").value;
  const guests = document.getElementById("guest-count").value;

  alert(`✅ Booking Confirmed!\n\nVenue: ${selectedVenue}\nName: ${name}\nEmail: ${email}\nDate: ${date}\nGuests: ${guests}`);

  bookingModal.style.display = "none";
  bookingForm.reset();
});
