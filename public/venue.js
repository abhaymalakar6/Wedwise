const venues = {
  "andhra-pradesh": {
    vijayawada: [
      {
        name: "Hotel Ilapuram",
        description: "A luxurious venue in Vijayawada offering top-notch amenities.",
        pricePerGuest: 500,
        rating: 4.5,
        features: ["Banquet Hall", "Accommodation: 100", "In-house Catering"],
        images: ["ilapuram1.jpg", "ilapuram2.jpg"]
      },
      {
        name: "Fortune Murali Park",
        description: "Premium venue with great facilities and ambience.",
        pricePerGuest: 600,
        rating: 4.7,
        features: ["Outdoor Space", "Accommodation: 150", "Parking Available"],
        images: ["fortune1.jpg"]
      },
      {
        name: "Hotel Royal Gardens",
        description: "Beautiful garden venue perfect for intimate weddings.",
        pricePerGuest: 450,
        rating: 4.4,
        features: ["Garden Venue", "Accommodation: 80", "Catering Services"],
        images: ["royalgardens1.jpg"]
      }
    ],
    visakhapatnam: [
      {
        name: "The Park Visakhapatnam",
        description: "Beachside venue with stunning views and excellent services.",
        pricePerGuest: 600,
        rating: 4.7,
        features: ["Beach View", "Accommodation: 150", "Outdoor Space"],
        images: ["park1.jpg", "park2.jpg"]
      },
      {
        name: "Novotel Visakhapatnam Varun Beach",
        description: "Luxury hotel and event space near the beach.",
        pricePerGuest: 700,
        rating: 4.8,
        features: ["Banquet Hall", "Accommodation: 200", "Spa & Pool"],
        images: ["novotel1.jpg"]
      },
      {
        name: "KIMS Convention Centre",
        description: "Well-equipped venue for large gatherings.",
        pricePerGuest: 550,
        rating: 4.5,
        features: ["Large Hall", "Parking", "Audio-Visual Facilities"],
        images: ["kims1.jpg"]
      }
    ],
    guntur: [
      {
        name: "Hotel Grand Nagarjuna",
        description: "Elegant venue in Guntur suitable for weddings and events.",
        pricePerGuest: 550,
        rating: 4.6,
        features: ["Banquet Hall", "Accommodation: 120", "In-house Catering"],
        images: ["nagarjuna1.jpg", "nagarjuna2.jpg"]
      },
      {
        name: "Palm Greens Convention",
        description: "Spacious venue with modern amenities.",
        pricePerGuest: 480,
        rating: 4.3,
        features: ["Outdoor Space", "Accommodation: 100", "Parking"],
        images: ["palmgreens1.jpg"]
      },
      {
        name: "Sri Sai Convention Hall",
        description: "Affordable venue with decent facilities.",
        pricePerGuest: 420,
        rating: 4.0,
        features: ["Banquet Hall", "Parking", "Catering Available"],
        images: ["srisai1.jpg"]
      }
    ]
  },

  "arunachal-pradesh": {
    itanagar: [
      {
        name: "Donyi Polo Convention Centre",
        description: "Popular event venue in Itanagar with cultural ambience.",
        pricePerGuest: 300,
        rating: 4.2,
        features: ["Cultural Decor", "Outdoor Space", "Parking"],
        images: ["donyipolo1.jpg"]
      },
      {
        name: "Nyamocha Convention Hall",
        description: "Suitable for medium-sized events and weddings.",
        pricePerGuest: 280,
        rating: 4.0,
        features: ["Banquet Hall", "Audio-Visual", "Catering"],
        images: ["nyamocha1.jpg"]
      },
      {
        name: "Itanagar Convention Centre",
        description: "Conveniently located venue with modern amenities.",
        pricePerGuest: 320,
        rating: 4.3,
        features: ["Large Hall", "Parking", "Catering Services"],
        images: ["itanagar1.jpg"]
      }
    ],
    naharlagun: [
      {
        name: "Naharlagun Community Hall",
        description: "Community event space with essential facilities.",
        pricePerGuest: 250,
        rating: 4.1,
        features: ["Community Hall", "Outdoor Space", "Parking"],
        images: ["naharlagun1.jpg"]
      },
      {
        name: "Apollo Convention Centre",
        description: "Modern venue with good catering options.",
        pricePerGuest: 300,
        rating: 4.4,
        features: ["Banquet Hall", "Accommodation Nearby", "Audio System"],
        images: ["apollo1.jpg"]
      },
      {
        name: "City Pride Banquet",
        description: "Affordable and popular banquet hall.",
        pricePerGuest: 260,
        rating: 4.0,
        features: ["Banquet Hall", "Parking", "Catering"],
        images: ["citypride1.jpg"]
      }
    ],
    pasighat: [
      {
        name: "Pasighat Wedding Hall",
        description: "Spacious venue for family weddings and functions.",
        pricePerGuest: 270,
        rating: 4.1,
        features: ["Banquet Hall", "Garden Area", "Parking"],
        images: ["pasighat1.jpg"]
      },
      {
        name: "Green Leaf Convention",
        description: "Eco-friendly venue with garden and halls.",
        pricePerGuest: 280,
        rating: 4.2,
        features: ["Garden Venue", "Parking", "Catering"],
        images: ["greenleaf1.jpg"]
      },
      {
        name: "River View Banquet",
        description: "Scenic venue with river views.",
        pricePerGuest: 290,
        rating: 4.3,
        features: ["Outdoor Space", "Parking", "Catering"],
        images: ["riverview1.jpg"]
      }
    ]
  },

  "assam": {
    guwahati: [
      {
        name: "Hotel Brahmaputra Ashok",
        description: "Luxury hotel with grand banquet halls.",
        pricePerGuest: 600,
        rating: 4.6,
        features: ["Banquet Hall", "Accommodation", "In-house Catering"],
        images: ["ashok1.jpg", "ashok2.jpg"]
      },
      {
        name: "Vivanta Guwahati",
        description: "Elegant venue with modern facilities.",
        pricePerGuest: 650,
        rating: 4.7,
        features: ["Banquet Hall", "Accommodation", "Outdoor Space"],
        images: ["vivanta1.jpg"]
      },
      {
        name: "Radisson Blu Guwahati",
        description: "Popular five-star venue for weddings.",
        pricePerGuest: 700,
        rating: 4.8,
        features: ["Luxury Rooms", "Banquet Hall", "Spa & Pool"],
        images: ["radisson_guwahati1.jpg"]
      }
    ],
    silchar: [
      {
        name: "Hotel Grand Monarch",
        description: "Popular event space in Silchar.",
        pricePerGuest: 500,
        rating: 4.3,
        features: ["Banquet Hall", "Parking", "Catering"],
        images: ["monarch1.jpg"]
      },
      {
        name: "Silchar Convention Centre",
        description: "Spacious venue for weddings and conferences.",
        pricePerGuest: 480,
        rating: 4.2,
        features: ["Large Hall", "Parking", "Audio-Visual"],
        images: ["silchar_cc1.jpg"]
      },
      {
        name: "Hotel Rajmahal",
        description: "Affordable venue with good facilities.",
        pricePerGuest: 450,
        rating: 4.1,
        features: ["Banquet Hall", "Catering", "Parking"],
        images: ["rajmahal1.jpg"]
      }
    ],
    dhamrai: [
      {
        name: "Dhamrai Wedding Hall",
        description: "Affordable venue for family events.",
        pricePerGuest: 400,
        rating: 4.0,
        features: ["Banquet Hall", "Outdoor Space", "Parking"],
        images: ["dhamrai1.jpg"]
      },
      {
        name: "Sunrise Convention Hall",
        description: "Spacious hall with modern amenities.",
        pricePerGuest: 420,
        rating: 4.1,
        features: ["Banquet Hall", "Parking", "Catering"],
        images: ["sunrise1.jpg"]
      },
      {
        name: "Green Leaf Banquet",
        description: "Popular venue with garden views.",
        pricePerGuest: 410,
        rating: 4.2,
        features: ["Garden Venue", "Outdoor Space", "Parking"],
        images: ["greenleaf2.jpg"]
      }
    ]
  },

  //... repeat similar structure for other states

  "madhya-pradesh": {
    indore: [
      {
        name: "Radisson Blu Hotel",
        description: "Radisson Blu Hotel, Indore is a grand five-star property, a luxurious venue to host your friends and family.",
        pricePerGuest: 650,
        rating: 4.7,
        features: ["Royal Decor", "Accommodation: 200", "In-house Catering"],
        images: ["radison.jpeg", "radison2.jpg", "radison3.jpg"]
      },
      {
        name: "Ashokraj Resort And Farms",
        description: "Ashokraj Resort And Farms, is a wedding venue personifying brilliance.It is perfect for hosting any kind of event.",
        pricePerGuest: 580,
        rating: 4.5,
        features: ["Banquet Hall", "Accommodation: 150", "Outdoor Space"],
        images: ["ashok1.jpg", "ashok2.jpg"]
      },
      {
        name: "Sayaji Hotel",
        description: "Sayaji Hotel, Indore, is a luxurious venue to celebrate your milestones in the presence of your near and dear ones",
        pricePerGuest: 800,
        rating: 5.0,
        features: ["Banquet Hall", "Accommodation: 150", "Outdoor Space"],
        images: ["sayaji.jpg", "sayaji1.jpg"]
      },
      {
        name: "Lemon Tree Hotel",
        description: "Lemon Tree Hotel in Indore offers family rooms with air-conditioning, private bathrooms, and modern amenities",
        pricePerGuest: 720,
        rating: 4.8,
        features: ["Royal Outdoor", "Accommodation: 150", "Outdoor Space"],
        images: ["lemon1.jpg", "lemon2.jpg"]
      }
    ],
    bhopal: [
      {
        name: "Taj Bhopal",
        description: "Luxurious venue with classic Indian architecture.",
        pricePerGuest: 700,
        rating: 4.8,
        features: ["Banquet Hall", "Accommodation: 180", "Spa & Pool"],
        images: ["tajbhopal1.jpg", "tajbhopal2.jpg"]
      },
      {
        name: "Jeet Banquets",
        description: "Popular local banquet hall with great services.",
        pricePerGuest: 550,
        rating: 4.5,
        features: ["Banquet Hall", "Parking", "Catering"],
        images: ["jeet1.jpg"]
      },
      {
        name: "Bhopal Convention Centre",
        description: "Modern convention centre with multiple halls.",
        pricePerGuest: 600,
        rating: 4.6,
        features: ["Multiple Halls", "Parking", "Audio-Visual"],
        images: ["bhopal_cc1.jpg"]
      }
    ],
    jabalpur: [
      {
        name: "Jabalpur Palace",
        description: "Majestic venue with historic charm.",
        pricePerGuest: 650,
        rating: 4.7,
        features: ["Royal Decor", "Accommodation: 150", "Garden Space"],
        images: ["jabalpur1.jpg"]
      },
      {
        name: "The Grand Venue",
        description: "Contemporary venue with excellent facilities.",
        pricePerGuest: 600,
        rating: 4.5,
        features: ["Banquet Hall", "Accommodation", "Catering"],
        images: ["grandvenue1.jpg"]
      },
      {
        name: "Riverfront Banquet",
        description: "Scenic venue near the river.",
        pricePerGuest: 580,
        rating: 4.4,
        features: ["Outdoor Space", "Parking", "Catering"],
        images: ["riverfront1.jpg"]
      }
    ]
  },

  "maharashtra": {
    mumbai: [
      {
        name: "The LaLiT Mumbai",
        description: "Enjoy luxury at The LaLiT Mumbai, with a stunning atrium lobby, a spa with 9 treatment rooms, and a rooftop restaurant.",
        pricePerGuest: 750,
        rating: 4.6,
        features: ["Royal Decor", "Accommodation: 200", "In-house Catering"],
        images: ["lalit1.webp", "lalit2.webp"]
      },
      {
        name: "Sahara Star Hotel",
        description: "Sahara Star offers solo travelers a unique stay with a stunning marine aquarium, tropical lagoon vibes.",
        pricePerGuest: 580,
        rating: 4.2,
        features: ["Banquet Hall", "Accommodation: 150", "Outdoor Space"],
        images: ["sahara.webp", "sahara2.webp"]
      },
      {
        name: "JW Marriott Mumbai",
        description: "Premium hotel with large banquet halls.",
        pricePerGuest: 700,
        rating: 4.7,
        features: ["Luxury Rooms", "Banquet Hall", "Spa & Pool"],
        images: ["jwmarriott1.jpg"]
      }
    ],
    pune: [
      {
        name: "Hyatt Regency Pune",
        description: "Top-notch venue with luxurious amenities.",
        pricePerGuest: 650,
        rating: 4.5,
        features: ["Banquet Hall", "Accommodation", "Spa & Pool"],
        images: ["hyattpune1.jpg"]
      },
      {
        name: "Marriott Hotel Pune",
        description: "Spacious venue with modern decor.",
        pricePerGuest: 600,
        rating: 4.4,
        features: ["Banquet Hall", "Accommodation", "Catering"],
        images: ["marriottpune1.jpg"]
      },
      {
        name: "The Corinthians Resort",
        description: "Resort-style venue perfect for destination weddings.",
        pricePerGuest: 680,
        rating: 4.6,
        features: ["Outdoor Space", "Accommodation", "Parking"],
        images: ["corinthians1.jpg"]
      }
    ],
    nagpur: [
      {
        name: "Hotel Centre Point",
        description: "Popular local venue with great amenities.",
        pricePerGuest: 500,
        rating: 4.3,
        features: ["Banquet Hall", "Parking", "Catering"],
        images: ["centrepoint1.jpg"]
      },
      {
        name: "Le Meridien Nagpur",
        description: "Luxury hotel with banquet halls.",
        pricePerGuest: 650,
        rating: 4.7,
        features: ["Banquet Hall", "Accommodation", "Spa & Pool"],
        images: ["lemeridien1.jpg"]
      },
      {
        name: "Sayaji Nagpur",
        description: "Elegant venue for weddings.",
        pricePerGuest: 600,
        rating: 4.5,
        features: ["Banquet Hall", "Accommodation", "Catering"],
        images: ["sayaji_nagpur1.jpg"]
      }
    ]
  },

  //... continue for other states similarly
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

const paymentModal = document.getElementById("payment-modal");
const closePaymentModal = document.getElementById("close-payment-modal");
const paymentSummary = document.getElementById("payment-summary");
const confirmPaymentBtn = document.getElementById("confirm-payment-btn");

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
          <h3>${venue.name} <span><span>⭐ ${venue.rating}</span></h3>
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
closePaymentModal.addEventListener("click", () => (paymentModal.style.display = "none"));

window.addEventListener("click", (event) => {
  if (event.target === modal) modal.style.display = "none";
  if (event.target === bookingModal) bookingModal.style.display = "none";
  if (event.target === paymentModal) paymentModal.style.display = "none";
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

  bookingModal.style.display = "none";

  paymentSummary.innerHTML = `
    <p><strong>Venue:</strong> ${selectedVenue}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Guests:</strong> ${guests}</p>
    <p><strong>Total:</strong> ₹${totalPrice}</p>
  `;

  paymentModal.style.display = "block";
});

confirmPaymentBtn.addEventListener("click", () => {
  alert("✅ Payment Successful! Thank you for booking.");
  paymentModal.style.display = "none";
});
