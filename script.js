// ==========================================================================
// WANDERLUST — JAVASCRIPT LOGIC ENGINE (script.js)
// Interactive features for Web Programming Competition
// ==========================================================================

// --- 1. Destination Database for Dynamic Modals & Recommendations ---
const destinationDB = {
    "Ladakh": {
        title: "Ladakh &bull; High Passes &amp; Lakes",
        location: "Jammu &amp; Kashmir &bull; Trans-Himalayas",
        image: "images/ladakh.jpg",
        tag: "Highlands",
        duration: "7–8 Days",
        price: "₹45,000",
        desc: "Traverse high altitude mountain passes, cliffside Buddhist monasteries, Nubra sand dunes, and the mesmerizing blues of Pangong Tso lake.",
        essentials: [
            "✔ Khardung La Pass (17,582 ft) expedition",
            "✔ Overnight eco-retreat at Pangong Tso",
            "✔ Thiksey &amp; Hemis monastery morning prayer ceremonies",
            "✔ Double-humped camel safari in Nubra Valley"
        ]
    },
    "Goa": {
        title: "Goa &bull; Coastal Sunshine &amp; Heritage",
        location: "Western Ghats &bull; Arabian Sea Coast",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
        tag: "Coastal",
        duration: "5 Days",
        price: "₹20,000",
        desc: "Golden sandy stretches, vibrant beach shacks, Portuguese villas in Fontainhas, spice plantations, and peaceful sunset cruises.",
        essentials: [
            "✔ Heritage architecture walk through Fontainhas",
            "✔ Sunset catamaran cruise on the Mandovi River",
            "✔ Certified scuba diving &amp; water sports at Grande Island",
            "✔ Organic spice plantation lunch and tour"
        ]
    },
    "Kerala": {
        title: "Kerala &bull; God's Own Country",
        location: "South India &bull; Malabar Coast",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
        tag: "Sanctuary",
        duration: "8 Days",
        price: "₹40,000",
        desc: "Glide along silent backwaters aboard a luxury cedar houseboat, trek through misted Munnar tea valleys, and experience authentic Ayurvedic treatments.",
        essentials: [
            "✔ Private overnight Kettuvallam houseboat stay",
            "✔ High-altitude tea plantation walks in Munnar",
            "✔ Authentic daily Ayurvedic wellness therapies",
            "✔ Kathakali classical dance and Kalaripayattu martial art shows"
        ]
    },
    "Rajasthan": {
        title: "Rajasthan &bull; Fortresses of the Kings",
        location: "Northwest India &bull; Thar Desert",
        image: "images/rajasthan.jpg",
        tag: "Royal Heritage",
        duration: "9 Days",
        price: "₹35,000",
        desc: "Stand atop the imposing bastions of Mehrangarh, sail past the marble Lake Palace in Udaipur, and camp beneath star-studded skies in the Thar desert.",
        essentials: [
            "✔ Private guided tour of Mehrangarh Fort &amp; Jaswant Thada",
            "✔ Sunset boat ride on Lake Pichola in Udaipur",
            "✔ Luxury desert tent camp &amp; folk music under the stars",
            "✔ Amer Fort elephant path and City Palace in Jaipur"
        ]
    },
    "Rishikesh": {
        title: "Rishikesh &bull; Sacred River &amp; Rapids",
        location: "Uttarakhand &bull; Himalayan Foothills",
        image: "images/rishikesh.png",
        tag: "Spiritual &amp; Wild",
        duration: "3 Days",
        price: "₹12,000",
        desc: "Thrilling grade-IV white-water rafting, tranquil yoga ashrams beside the roaring Ganges, and evening fire aarti at Parmarth Niketan.",
        essentials: [
            "✔ 16 km white-water river rafting from Shivpuri",
            "✔ Twilight Ganga Aarti ceremony on the river ghats",
            "✔ Sunrise yoga and guided meditation sessions",
            "✔ Cliff jumping and riverside camping under pine forests"
        ]
    },
    "Darjeeling": {
        title: "Darjeeling &bull; The Queen of Hills",
        location: "West Bengal &bull; Eastern Himalayas",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        tag: "Tea Estates",
        duration: "4 Days",
        price: "₹15,000",
        desc: "Rolling emerald tea slopes, early morning sunrise over Mount Kanchenjunga from Tiger Hill, and rides on the historic UNESCO Himalayan Toy Train.",
        essentials: [
            "✔ Sunrise panorama of Mount Kanchenjunga at Tiger Hill",
            "✔ Heritage UNESCO steam toy train joyride to Ghoom",
            "✔ Private tea tasting at Happy Valley Tea Estate",
            "✔ Himalayan Mountaineering Institute and Peace Pagoda"
        ]
    },
    "Meghalaya": {
        title: "Meghalaya &bull; The Abode of Clouds",
        location: "Northeast India &bull; Khasi Hills",
        image: "https://images.unsplash.com/photo-1626014303757-640a43fa4841?auto=format&fit=crop&w=1200&q=85",
        tag: "Cloud Realm",
        duration: "6 Days",
        price: "₹24,000",
        desc: "Living Root Bridges woven over centuries by the Khasi people, glass-clear waters of the Umngot river in Dawki, and roaring waterfalls.",
        essentials: [
            "✔ Trek to the Double Decker Living Root Bridge in Nongriat",
            "✔ Crystal-clear boating on the Dawki border river",
            "✔ Nohkalikai and Seven Sisters waterfalls viewpoint",
            "✔ Exploring Mawlynnong, Asia's cleanest village"
        ]
    },
    "Andaman": {
        title: "Andaman Islands &bull; Tropical Archipelago",
        location: "Bay of Bengal &bull; Island Sanctuary",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=85",
        tag: "Archipelago",
        duration: "6 Days",
        price: "₹38,000",
        desc: "Powder-soft white sands at Radhanagar Beach, untouched coral reefs, scuba diving, and magical night kayaking amidst glowing bioluminescence.",
        essentials: [
            "✔ Sunset walks on Asia's best Radhanagar Beach",
            "✔ Guided scuba diving at Elephant Beach coral gardens",
            "✔ Night kayaking under bioluminescent waters in Havelock",
            "✔ Historical sound and light show at Cellular Jail"
        ]
    },
    "Beas Kund": {
        title: "Manali &bull; Beas Kund Alpine Trek",
        location: "Himachal Pradesh &bull; Solang Valley",
        image: "images/beas-kund.jpg",
        tag: "Alpine Valley",
        duration: "5 Days",
        price: "₹15,000",
        desc: "Hike along crystal glacial rivers, pine-carpeted alpine meadows, and camp under the towering peaks of Hanuman Tibba and Friendship Peak.",
        essentials: [
            "✔ Glacial lake summit trek to sacred Beas Kund",
            "✔ High-altitude alpine tent camping under starry skies",
            "✔ Mountain stream river crossings and Solang Valley trails",
            "✔ Old Manali cafe culture and Hadimba woodland temple"
        ]
    },
    "Varanasi": {
        title: "Varanasi &bull; The Sacred Eternal City",
        location: "Uttar Pradesh &bull; River Ganges",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=85",
        tag: "Eternal City",
        duration: "3 Days",
        price: "₹12,000",
        desc: "Immerse yourself in centuries of living spiritual heritage. Dawn wooden boat rides on the Ganges, evening Dashashwamedh Aarti, and hidden silk bazaars.",
        essentials: [
            "✔ Sunrise wooden rowboat ride along the 84 ancient ghats",
            "✔ Front-row boat seats for the Dashashwamedh Ganga Aarti",
            "✔ Heritage heritage trail through narrow Banaras alleyways",
            "✔ Sarnath deer park excursion where Lord Buddha gave first sermon"
        ]
    }
};

// --- 2. Regional Explorer Database ---
const regionData = {
    "north": {
        label: "NORTH INDIA &bull; HIMALAYAN REALM",
        title: "Snow Peaks, Sacred Rivers &amp; High Altitude",
        desc: "Home to the mighty Himalayas, ancient river civilizations, and spiritual sanctuaries. From the barren majesty of Ladakh and the adventure trails of Himachal to the sacred evening aartis of Rishikesh.",
        places: "Ladakh, Beas Kund, Rishikesh, Manali, Shimla",
        season: "May–Sep (High Passes), Oct–Mar (Foothills)",
        vibe: "High-Altitude Thrill, Glacial Rivers &amp; Ashrams",
        image: "images/ladakh.jpg"
    },
    "south": {
        label: "SOUTH INDIA &bull; TROPICAL SANCTUARY",
        title: "Emerald Canals, Temple Towns &amp; Spice Hills",
        desc: "A land of languid waterways, ancient Dravidian granite temples, and aromatic coffee estates. Experience slow travel on Kerala houseboats, French colonial promenades in Puducherry, and UNESCO ruins in Hampi.",
        places: "Kerala Backwaters, Hampi, Coorg, Ooty, Madurai",
        season: "October to March (Warm &amp; pleasant)",
        vibe: "Ayurveda, Coffee Hills, Coconut Groves &amp; Classical Art",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85"
    },
    "west": {
        label: "WEST INDIA &bull; FORTS &amp; COASTAL SHORES",
        title: "Sandstone Citadels, White Salt &amp; Palm Beaches",
        desc: "Rich contrast between royal deserts, white salt expanses in Kutch, and sun-drenched coastal beaches in Goa. Marvel at Mehrangarh fort and savor coastal seafood.",
        places: "Rajasthan (Jodhpur, Udaipur, Jaipur), Goa, Rann of Kutch",
        season: "November to March (Cool desert &amp; beach weather)",
        vibe: "Palatial Havelis, Desert Dunes, Sunsets &amp; Heritage",
        image: "images/rajasthan.jpg"
    },
    "east": {
        label: "EAST INDIA &bull; HERITAGE &amp; TEA FORESTS",
        title: "Sacred Ghats, British Legacies &amp; Mountain Rail",
        desc: "From the eternal chants of Varanasi and the intellectual boulevards of Kolkata to the Himalayan tea hills of Darjeeling overlooking Kanchenjunga.",
        places: "Darjeeling, Varanasi, Kolkata, Sundarbans, Bodh Gaya",
        season: "October to April (Crisp and clear)",
        vibe: "Living Traditions, Tea Plantations &amp; Classical Culture",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85"
    },
    "northeast": {
        label: "NORTHEAST INDIA &bull; UNCHARTED WONDERS",
        title: "Living Root Bridges, Cloud Forests &amp; Monasteries",
        desc: "India's best-kept secret. Explore bio-engineered root bridges in Meghalaya, one-horned rhinoceroses in Kaziranga, and high-altitude Buddhist monasteries in Tawang.",
        places: "Meghalaya (Cherrapunji, Dawki), Kaziranga, Tawang, Sikkim",
        season: "October to May (Lush green landscapes &amp; clear streams)",
        vibe: "Rainforest Hikes, Living Bridges, Tribal Culture &amp; Solitude",
        image: "https://images.unsplash.com/photo-1626014303757-640a43fa4841?auto=format&fit=crop&w=1200&q=85"
    }
};

// --- 3. DOM Ready Initialization ---
document.addEventListener("DOMContentLoaded", function () {

    // --- Header Scroll Effect & Progress Bar ---
    const header = document.getElementById("mainHeader");
    const progressBar = document.getElementById("scrollProgress");
    const backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Shrink & frosted glass header
        if (scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Reading progress bar
        if (docHeight > 0) {
            const progress = (scrollY / docHeight) * 100;
            progressBar.style.width = progress + "%";
        }

        // Back-to-top button
        if (scrollY > 500) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    // Back-to-top click
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // --- Mobile Drawer Toggle ---
    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");

    menuToggle.addEventListener("click", function () {
        mobileDrawer.classList.toggle("active");
    });

    // Close mobile drawer on link click
    document.querySelectorAll(".mobile-link, .btn-mobile-cta").forEach(function (link) {
        link.addEventListener("click", function () {
            mobileDrawer.classList.remove("active");
        });
    });

    // --- Destination Filter Pills ---
    const filterPills = document.querySelectorAll("#filterPills .pill");
    const destinationCards = document.querySelectorAll("#destinationsGrid .dest-card");

    filterPills.forEach(function (pill) {
        pill.addEventListener("click", function () {
            filterPills.forEach(p => p.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            applyDestinationFilter(filterValue);
        });
    });

    // --- Save / Wishlist Heart Micro-Interaction ---
    const saveButtons = document.querySelectorAll(".btn-save");
    saveButtons.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            this.classList.toggle("active");
            if (this.classList.contains("active")) {
                this.innerHTML = "♥";
            } else {
                this.innerHTML = "♡";
            }
        });
    });

    // --- Region Explorer Tabs ---
    const regionTabs = document.querySelectorAll("#regionTabs .region-tab");
    regionTabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            regionTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            const regKey = this.getAttribute("data-region");
            updateRegionShowcase(regKey);
        });
    });

    // --- Trip Planner Duration Slider & Style Chips ---
    const durationSlider = document.getElementById("planDuration");
    const durationVal = document.getElementById("durationVal");

    if (durationSlider && durationVal) {
        durationSlider.addEventListener("input", function () {
            durationVal.textContent = this.value + " Days";
        });
    }

    const styleChips = document.querySelectorAll("#styleOptions .style-chip");
    const selectedStyleInput = document.getElementById("selectedStyle");

    styleChips.forEach(function (chip) {
        chip.addEventListener("click", function () {
            styleChips.forEach(c => c.classList.remove("active"));
            this.classList.add("active");
            selectedStyleInput.value = this.getAttribute("data-style");
        });
    });

    // --- Trip Planner Form Submission ---
    const plannerForm = document.getElementById("smartPlannerForm");
    if (plannerForm) {
        plannerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            generateTripRecommendation();
        });
    }

    // --- Newsletter Form Submission ---
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const emailInput = this.querySelector("input").value;
            alert("Thank you for subscribing (" + emailInput + ")! Welcome to the WANDERLUST journal circle.");
            this.reset();
        });
    }

    // Close modal on ESC key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeDestinationModal();
        }
    });

    // Close modal when clicking on backdrop outside card
    const modalBackdrop = document.getElementById("destinationModal");
    modalBackdrop.addEventListener("click", function (e) {
        if (e.target === modalBackdrop) {
            closeDestinationModal();
        }
    });
});

// --- 4. Filtering Helper Function ---
function applyDestinationFilter(category) {
    const cards = document.querySelectorAll("#destinationsGrid .dest-card");

    cards.forEach(function (card) {
        const cardMood = card.getAttribute("data-mood") || "";

        if (category === "all") {
            card.classList.remove("hidden");
        } else if (cardMood.includes(category)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}

// Function called when clicking travel mood boxes
function filterByMood(moodCategory) {
    // Update active pill button
    const pills = document.querySelectorAll("#filterPills .pill");
    pills.forEach(function (pill) {
        if (pill.getAttribute("data-filter") === moodCategory) {
            pill.classList.add("active");
        } else {
            pill.classList.remove("active");
        }
    });

    applyDestinationFilter(moodCategory);

    // Smoothly scroll to destinations section
    const destSec = document.getElementById("destinations");
    if (destSec) {
        destSec.scrollIntoView({ behavior: "smooth" });
    }
}

// --- 5. Destination Modal Logic ---
function openDestinationModal(destName) {
    const data = destinationDB[destName];
    if (!data) return;

    document.getElementById("modalImg").src = data.image;
    document.getElementById("modalImg").alt = destName;
    document.getElementById("modalTag").innerHTML = data.tag;
    document.getElementById("modalLocation").innerHTML = data.location;
    document.getElementById("modalTitle").innerHTML = data.title;
    document.getElementById("modalDesc").innerHTML = data.desc;
    document.getElementById("modalPrice").innerHTML = data.price + " <small>/ person</small>";

    const list = document.getElementById("modalHighlightsList");
    list.innerHTML = "";
    data.essentials.forEach(function (item) {
        const li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    });

    // Store selected dest name for quick plan transfer
    window.currentModalDest = destName;

    document.getElementById("destinationModal").classList.remove("hidden");
}

function closeDestinationModal() {
    document.getElementById("destinationModal").classList.add("hidden");
}

function proceedToPlanFromModal() {
    closeDestinationModal();

    if (window.currentModalDest) {
        const select = document.getElementById("planDest");
        if (select) {
            select.value = window.currentModalDest;
        }
    }

    const planner = document.getElementById("planner");
    if (planner) {
        planner.scrollIntoView({ behavior: "smooth" });
    }
}

// --- 6. Region Showcase Switcher ---
function updateRegionShowcase(regKey) {
    const reg = regionData[regKey];
    if (!reg) return;

    const img = document.getElementById("regionImg");
    img.style.opacity = 0.3;

    setTimeout(function () {
        img.src = reg.image;
        document.getElementById("regionLabel").innerHTML = reg.label;
        document.getElementById("regionTitle").innerHTML = reg.title;
        document.getElementById("regionDesc").innerHTML = reg.desc;
        document.getElementById("regionPlaces").innerHTML = reg.places;
        document.getElementById("regionSeason").innerHTML = reg.season;
        document.getElementById("regionVibe").innerHTML = reg.vibe;
        img.style.opacity = 1;
    }, 180);
}

// --- 7. Signature Journey Pre-Fill Helper ---
function selectJourneyForPlan(journeyName, destination, basePrice) {
    const select = document.getElementById("planDest");
    if (select) {
        select.value = destination;
    }

    const planner = document.getElementById("planner");
    if (planner) {
        planner.scrollIntoView({ behavior: "smooth" });
    }

    // Trigger recommendation for instant preview
    setTimeout(function () {
        generateTripRecommendation();
    }, 400);
}

// --- 8. Interactive Trip Planner Generator ---
function generateTripRecommendation() {
    const dest = document.getElementById("planDest").value;
    const travelers = document.getElementById("planTravelers").value;
    const duration = document.getElementById("planDuration").value;
    const style = document.getElementById("selectedStyle").value;

    if (!dest) {
        alert("Please select a destination to build your itinerary!");
        return;
    }

    // Determine estimated budget calculation
    const basePrices = {
        "Ladakh": 45000,
        "Goa": 20000,
        "Kerala": 40000,
        "Rajasthan": 35000,
        "Rishikesh": 12000,
        "Darjeeling": 15000,
        "Meghalaya": 24000,
        "Andaman": 38000,
        "Beas Kund": 15000,
        "Varanasi": 12000
    };

    const baseCost = basePrices[dest] || 25000;
    let travelerCount = 2;
    if (travelers === "1") travelerCount = 1;
    else if (travelers === "2") travelerCount = 2;
    else if (travelers === "3-4") travelerCount = 3.5;
    else if (travelers === "5+") travelerCount = 5;

    // Style multipliers
    let styleMultiplier = 1.0;
    if (style === "Luxury") styleMultiplier = 1.6;
    else if (style === "Relaxation") styleMultiplier = 1.15;
    else if (style === "Culture") styleMultiplier = 1.1;
    else if (style === "Adventure") styleMultiplier = 1.05;

    // Duration adjustment
    const daysFactor = parseInt(duration) / 6;

    const totalEstimated = Math.round(baseCost * travelerCount * styleMultiplier * daysFactor);
    const formattedTotal = "₹" + totalEstimated.toLocaleString("en-IN");

    // Populate Results
    document.getElementById("resTitle").innerHTML = duration + "-Day Curated " + dest + " " + style + " Journey";
    document.getElementById("resTagline").innerHTML = "Personalized for " + travelers + " traveler(s) focusing on " + style.toLowerCase() + " experiences and scenic stays.";
    document.getElementById("resBudget").innerHTML = formattedTotal;
    document.getElementById("resDuration").innerHTML = duration + " Days / " + (parseInt(duration) - 1) + " Nights";
    document.getElementById("resStyle").innerHTML = style + " &bull; Private Concierge";

    // Dynamic inclusions based on destination
    const inclusionsList = document.getElementById("resInclusions");
    inclusionsList.innerHTML = "";

    const genericInclusions = [
        "✔ Handpicked boutique &amp; heritage stays suited for " + style,
        "✔ Dedicated private sanitized vehicle throughout the " + duration + "-day journey",
        "✔ Expert English &amp; regional-speaking certified naturalist/historian",
        "✔ Seamless logistics, luggage handling, and 24/7 on-call travel desk"
    ];

    genericInclusions.forEach(function (inc) {
        const li = document.createElement("li");
        li.innerHTML = inc;
        inclusionsList.appendChild(li);
    });

    // Reveal result card
    const resultCard = document.getElementById("planResult");
    resultCard.classList.remove("hidden");
    resultCard.scrollIntoView({ behavior: "smooth", block: "center" });
}
