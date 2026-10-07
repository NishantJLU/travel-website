// ==========================================================================
// WANDERLUST — Student Travel & Tourism Project (script.js)
// Simple Vanilla JavaScript for interactive destination filtering & planning
// ==========================================================================

// --- 1. Destination Database for Modal & Quick Details ---
const destinationDB = {
    "Ladakh": {
        title: "Ladakh",
        location: "Jammu & Kashmir",
        image: "images/ladakh.jpg",
        tag: "Highlands",
        duration: "7–8 Days",
        price: "₹45,000",
        desc: "Traverse high mountain passes, explore ancient cliffside monasteries, visit Nubra sand dunes, and experience the crystal blue waters of Pangong Tso lake.",
        highlights: [
            "Khardung La Pass mountain drive",
            "Pangong Tso lakeside camping",
            "Thiksey & Hemis monasteries",
            "Nubra Valley double-humped camel safari"
        ]
    },
    "Beas Kund": {
        title: "Beas Kund &bull; Manali",
        location: "Himachal Pradesh",
        image: "images/beas-kund.jpg",
        tag: "Alpine Trek",
        duration: "5 Days",
        price: "₹15,000",
        desc: "A popular alpine trek leading to the source of the river Beas. Walk through pine forests, river streams, and enjoy camping beneath snow peaks.",
        highlights: [
            "Trek to glacial lake Beas Kund",
            "Solang Valley outdoor activities",
            "Alpine tent camping under the stars",
            "Old Manali local village walk"
        ]
    },
    "Goa": {
        title: "Goa",
        location: "Western Coast",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        tag: "Coastal",
        duration: "5 Days",
        price: "₹20,000",
        desc: "Known for golden sandy beaches, lively beach shacks, Portuguese colonial heritage in Fontainhas, and fresh seafood.",
        highlights: [
            "North Goa beaches & water sports",
            "Historic churches of Old Goa",
            "Sunset boat cruise on Mandovi River",
            "Spice plantation tour & lunch"
        ]
    },
    "Rajasthan": {
        title: "Rajasthan",
        location: "Northwest India",
        image: "images/rajasthan.jpg",
        tag: "Heritage",
        duration: "9 Days",
        price: "₹35,000",
        desc: "Experience royal fortresses, marble palaces, vibrant local bazaars, and memorable camel safaris across the Thar Desert dunes.",
        highlights: [
            "Mehrangarh Fort & Jaswant Thada in Jodhpur",
            "City Palace & Lake Pichola boat ride in Udaipur",
            "Thar desert dune safari & folk dance evening",
            "Amber Fort & Hawa Mahal in Jaipur"
        ]
    },
    "Rishikesh": {
        title: "Rishikesh",
        location: "Uttarakhand",
        image: "images/rishikesh.png",
        tag: "Adventure & Yoga",
        duration: "3 Days",
        price: "₹12,000",
        desc: "The yoga capital situated at the foothills of the Himalayas. Famous for river rafting on the Ganges and the evening Ganga Aarti ceremony.",
        highlights: [
            "White-water rafting from Shivpuri",
            "Evening holy Ganga Aarti at Triveni Ghat",
            "Morning yoga & meditation sessions",
            "Ram Jhula & Laxman Jhula bridge walks"
        ]
    },
    "Darjeeling": {
        title: "Darjeeling",
        location: "West Bengal",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
        tag: "Tea Gardens",
        duration: "4 Days",
        price: "₹15,000",
        desc: "Famous hill station known for sweeping views of Mount Kanchenjunga, scenic tea plantations, and the UNESCO Himalayan Toy Train.",
        highlights: [
            "Sunrise panorama of Mount Kanchenjunga at Tiger Hill",
            "Historic UNESCO Himalayan Toy Train ride",
            "Tour and tea tasting at Happy Valley Tea Estate",
            "Peace Pagoda & Himalayan Mountaineering Institute"
        ]
    },
    "Kerala": {
        title: "Kerala",
        location: "South India",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
        tag: "Backwaters",
        duration: "8 Days",
        price: "₹40,000",
        desc: "Tranquil backwater houseboats in Alleppey, rolling green tea gardens of Munnar, and authentic traditional Ayurvedic wellness.",
        highlights: [
            "Overnight traditional houseboat cruise",
            "Tea garden trekking in Munnar",
            "Periyar wildlife sanctuary boat ride",
            "Traditional Kathakali cultural show"
        ]
    },
    "Delhi": {
        title: "Delhi",
        location: "Delhi NCR",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
        tag: "Capital City",
        duration: "4 Days",
        price: "₹12,000",
        desc: "The historic capital showcasing centuries of architecture from the Mughal era to modern monuments, bustling bazaars, and famous street food.",
        highlights: [
            "Qutub Minar & Humayun's Tomb",
            "Red Fort & India Gate visit",
            "Chandni Chowk food walk & rickshaw ride",
            "Lotus Temple & Akshardham"
        ]
    },
    "Bandhavgarh": {
        title: "Bandhavgarh",
        location: "Madhya Pradesh",
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
        tag: "Wildlife",
        duration: "4 Days",
        price: "₹20,000",
        desc: "One of India's most celebrated national parks with high Bengal tiger density, rich biodiversity, and ancient hill fort ruins.",
        highlights: [
            "Morning & afternoon open-jeep jungle safaris",
            "Tiger spotting in Tala and Magdhi zones",
            "Ancient Bandhavgarh Fort viewpoint",
            "Bird watching with certified naturalists"
        ]
    }
};

// --- 2. DOM Ready Initialization ---
document.addEventListener("DOMContentLoaded", function () {

    // Mobile Drawer Toggle
    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener("click", function () {
            mobileDrawer.classList.toggle("active");
        });

        // Close drawer when any mobile link is clicked
        document.querySelectorAll(".mobile-link, .btn-mobile-cta").forEach(function (link) {
            link.addEventListener("click", function () {
                mobileDrawer.classList.remove("active");
            });
        });
    }

    // Category Filter Pills
    const filterPills = document.querySelectorAll("#filterPills .pill");
    const cards = document.querySelectorAll("#destinationsGrid .dest-card");

    filterPills.forEach(function (pill) {
        pill.addEventListener("click", function () {
            filterPills.forEach(p => p.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            cards.forEach(function (card) {
                const category = card.getAttribute("data-category") || "";

                if (filterValue === "all") {
                    card.classList.remove("hidden");
                } else if (category.includes(filterValue)) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    // Trip Planner Duration Slider
    const durationSlider = document.getElementById("planDuration");
    const durationVal = document.getElementById("durationVal");

    if (durationSlider && durationVal) {
        durationSlider.addEventListener("input", function () {
            durationVal.textContent = this.value + " Days";
        });
    }

    // Travel Style Chips
    const styleChips = document.querySelectorAll("#styleOptions .style-chip");
    const selectedStyleInput = document.getElementById("selectedStyle");

    styleChips.forEach(function (chip) {
        chip.addEventListener("click", function () {
            styleChips.forEach(c => c.classList.remove("active"));
            this.classList.add("active");
            selectedStyleInput.value = this.getAttribute("data-style");
        });
    });

    // Trip Planner Form Submit
    const plannerForm = document.getElementById("smartPlannerForm");
    if (plannerForm) {
        plannerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            calculateTripCost();
        });
    }

    // Modal Backdrop Close
    const modalBackdrop = document.getElementById("destinationModal");
    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", function (e) {
            if (e.target === modalBackdrop) {
                closeDestinationModal();
            }
        });
    }

    // ESC Key to close modal
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeDestinationModal();
        }
    });
});

// --- 3. Destination Modal Functions ---
function openDestinationModal(destName) {
    const data = destinationDB[destName];
    if (!data) return;

    document.getElementById("modalImg").src = data.image;
    document.getElementById("modalImg").alt = destName;
    document.getElementById("modalTag").textContent = data.tag;
    document.getElementById("modalLocation").textContent = "📍 " + data.location;
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalDesc").textContent = data.desc;
    document.getElementById("modalPrice").innerHTML = data.price + " <small>/ person</small>";

    const list = document.getElementById("modalHighlightsList");
    list.innerHTML = "";
    data.highlights.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = "✔ " + item;
        list.appendChild(li);
    });

    window.currentSelectedDest = destName;
    document.getElementById("destinationModal").classList.remove("hidden");
}

function closeDestinationModal() {
    const modal = document.getElementById("destinationModal");
    if (modal) {
        modal.classList.add("hidden");
    }
}

function proceedToPlanFromModal() {
    closeDestinationModal();

    if (window.currentSelectedDest) {
        const select = document.getElementById("planDest");
        if (select) {
            select.value = window.currentSelectedDest;
        }
    }

    const planner = document.getElementById("planner");
    if (planner) {
        planner.scrollIntoView({ behavior: "smooth" });
    }
}

// Function to select package from featured trips
function selectJourneyForPlan(destinationName) {
    const select = document.getElementById("planDest");
    if (select) {
        select.value = destinationName;
    }

    const planner = document.getElementById("planner");
    if (planner) {
        planner.scrollIntoView({ behavior: "smooth" });
    }

    calculateTripCost();
}

// --- 4. Interactive Trip Planner Calculation ---
function calculateTripCost() {
    const dest = document.getElementById("planDest").value;
    const travelers = parseInt(document.getElementById("planTravelers").value) || 2;
    const duration = parseInt(document.getElementById("planDuration").value) || 5;
    const style = document.getElementById("selectedStyle").value || "Standard";

    if (!dest) {
        alert("Please select a destination first!");
        return;
    }

    // Exact per-person baseline costs from budget info
    const basePrices = {
        "Ladakh": 45000,
        "Beas Kund": 15000,
        "Goa": 20000,
        "Darjeeling": 15000,
        "Rajasthan": 35000,
        "Kerala": 40000,
        "Rishikesh": 12000,
        "Delhi": 12000,
        "Bandhavgarh": 20000
    };

    const baseCost = basePrices[dest] || 20000;

    // Style multipliers
    let styleMultiplier = 1.0;
    if (style === "Budget") styleMultiplier = 0.85;
    if (style === "Comfort") styleMultiplier = 1.25;

    // Standard baseline duration reference (5 days)
    const durationRatio = duration / 5;

    // Calculate total cost
    const totalCost = Math.round(baseCost * travelers * durationRatio * styleMultiplier);
    const formattedTotal = "₹" + totalCost.toLocaleString("en-IN");

    // Populate result card
    document.getElementById("resTitle").textContent = duration + "-Day " + dest + " Trip";
    document.getElementById("resTagline").textContent = "Estimated budget for " + travelers + " traveler(s) in " + style + " style.";
    document.getElementById("resBudget").textContent = formattedTotal;
    document.getElementById("resDuration").textContent = duration + " Days";
    document.getElementById("resStyle").textContent = style;

    // Show result card
    const resultCard = document.getElementById("planResult");
    resultCard.classList.remove("hidden");
    resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
