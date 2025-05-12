document.querySelector(".view-all").addEventListener("click", function() {
    const additionalItems = document.querySelectorAll(".service-item.additional");
    const button = this;

    // Toggle visibility of additional items
    additionalItems.forEach(item => {
        if (item.style.display === "none" || item.style.display === "") {
            item.style.display = "block";  // Show the item
        } else {
            item.style.display = "none";  // Hide the item
        }
    });

    // Toggle button text to "View Less Categories" or "View All Categories"
    if (button.textContent === "View All Categories") {
        button.textContent = "View Less Categories";
    } else {
        button.textContent = "View All Categories";
    }
});

// Search Vendors
document.querySelector(".search-bar button").addEventListener("click", function() {
    const selects = document.querySelectorAll(".search-bar select");
    let vendorType = selects[0].value;
    let city = selects[1].value;

    if (vendorType.toLowerCase().includes("select") || city.toLowerCase().includes("select")) {
        alert("Please select a vendor type and city.");
    } else {
        alert(`Searching for ${vendorType} in ${city}...`);
    }
});

// Smooth Scrolling (if href targets exist)
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        const href = this.getAttribute("href");
        if (href && href.startsWith("#")) {
            event.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});



