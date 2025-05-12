const venues = {
  "madhya-pradesh": {
    indore: [
      {
        name: "Radisson Blu Hotel",
        description:
          "Radisson Blu Hotel, Indore is a grand five-star property, a luxurious venue to host your friends and family.",
        pricePerGuest: 650,
        rating: 4.7,
        features: ["Royal Decor", "Accommodation: 200", "In-house Catering"],
        images: ["radison.jpeg", "Ashokraj.jpg", "radison3.jpg"]
      },
      {
        name: "Ashokraj Resort And Farms",
        description:
          "Ashokraj Resort And Farms, Indore, is a wedding venue personifying brilliance.This venue is perfect for hosting any kind of event filled with grandiose.",
        pricePerGuest: 580,
        rating: 4.5,
        features: ["Banquet Hall", "Accommodation: 150", "Outdoor Space"],
        images: ["Ashokraj.jpg", "Ashokraj2.jpg"]
      }
    ]
  },
    "maharashtra": {
    mumbai: [
      {
        name: "Radisson Blu Hotel",
        description:
          "Radisson Blu Hotel, Indore is a grand five-star property, a luxurious venue to host your friends and family.",
        pricePerGuest: 650,
        rating: 4.7,
        features: ["Royal Decor", "Accommodation: 200", "In-house Catering"],
        images: ["radison.jpeg", "Ashokraj.jpg", "radison3.jpg"]
      },
      {
        name: "Ashokraj Resort And Farms",
        description:
          "Ashokraj Resort And Farms, Indore, is a wedding venue personifying brilliance.This venue is perfect for hosting any kind of event filled with grandiose.",
        pricePerGuest: 580,
        rating: 4.5,
        features: ["Banquet Hall", "Accommodation: 150", "Outdoor Space"],
        images: ["Ashokraj.jpg", "Ashokraj2.jpg"]
      }
    ]
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
const totalPriceDisplay = document.getElementById("total-price");

let selectedVenue = "";
let currentSlide = 0;

stateSelect.addEventListener("change", () => {
  const state = stateSelect.value;
  citySelect.innerHTML = '<option value="">-- Choose City --</option>';
  venueList.innerHTML = "";

  if (state && venues[state]) {
    citySelect.disabled = false;
    Object.keys(venues[state]).forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
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
    venues[state][city].forEach((venue) => {
      const card = document.createElement("div");
      card.className = "venue-card";

      const featureList = venue.features.map((f) => `<span>${f}</span>`).join(" · ");

      card.innerHTML = `
        <div class="venue-card-left">
          <img src="${venue.images[0]}" alt="${venue.name}" />
        </div>
        <div class="venue-card-right">
          <h3>${venue.name} <span>⭐ ${venue.rating}</span></h3>
          <p>${venue.description}</p>
          <p><strong>Price per guest:</strong> ₹${venue.pricePerGuest}</p>
          <p class="venue-features">${featureList}</p>
          <button class="view-details-btn">View Details</button>
          <button class="book-now-btn" style="margin-top: 10px; background:#006C70;">Book Now</button>
        </div>
      `;

      card.querySelector(".view-details-btn").addEventListener("click", () => {
        modalVenueName.textContent = venue.name;
        modalVenueRating.textContent = `⭐ ${venue.rating}`;
        modalVenueDescription.textContent = venue.description;
        modalVenuePrice.textContent = `₹${venue.pricePerGuest} per guest`;
        modalVenueFeatures.textContent = venue.features.join(", ");

        carouselTrack.innerHTML = "";
        venue.images.forEach((imgSrc) => {
          const img = document.createElement("img");
          img.src = imgSrc;
          carouselTrack.appendChild(img);
        });

        currentSlide = 0;
        updateCarousel();
        modal.style.display = "block";
      });

      card.querySelector(".book-now-btn").addEventListener("click", () => {
        selectedVenue = venue.name;
        bookingModal.style.display = "block";
        totalPriceDisplay.textContent = "0";
      });

      venueList.appendChild(card);
    });
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
closeModal.addEventListener("click", () => (modal.style.display = "none"));
closeBookingModal.addEventListener("click", () => (bookingModal.style.display = "none"));

window.addEventListener("click", (event) => {
  if (event.target === modal) modal.style.display = "none";
  if (event.target === bookingModal) bookingModal.style.display = "none";
});

document.getElementById("guest-count").addEventListener("input", () => {
  const guests = Number(document.getElementById("guest-count").value);
  const state = stateSelect.value;
  const city = citySelect.value;
  const venue = venues[state]?.[city]?.find((v) => v.name === selectedVenue);
  const totalPrice = guests * (venue?.pricePerGuest || 0);
  totalPriceDisplay.textContent = totalPrice;
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const date = document.getElementById("event-date").value;
  const guests = Number(document.getElementById("guest-count").value);

  const state = stateSelect.value;
  const city = citySelect.value;
  const venue = venues[state][city].find((v) => v.name === selectedVenue);
  const totalPrice = guests * (venue?.pricePerGuest || 0);

  alert(
    `✅ Booking Confirmed!\n\nVenue: ${selectedVenue}\nName: ${name}\nEmail: ${email}\nDate: ${date}\nGuests: ${guests}\nTotal Price: ₹${totalPrice}`
  );

  bookingModal.style.display = "none";
  bookingForm.reset();
  totalPriceDisplay.textContent = "0";
});
