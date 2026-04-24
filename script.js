fetch("http://127.0.0.1:5000/cafes")
  .then(res => res.json())
  .then(data => console.log(data));

fetch("http://127.0.0.1:5000/cafes")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("cafes-container");
    container.innerHTML = "";

    data.forEach(cafe => {
      const card = document.createElement("div");
     card.className = "cafe-card";

card.innerHTML = `
  <img src="images/${cafe.image_url}" class="cafe-img">
  <div class="cafe-info">
    <h3>${cafe.name}</h3>
    <p>${cafe.area} ⭐ ${cafe.rating}</p>
    <p>${cafe.known_for}</p>
  </div>
`;

      // 🔥 CLICK EVENT
      card.onclick = () => {
        window.location.href = `details.html?category=cafes&id=${cafe.id}`;
      };

      container.appendChild(card);
    });
  });  


fetch("http://127.0.0.1:5000/restaurants")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("restaurant-container");

    if (!container) return; // safety

    container.innerHTML = "";

    data.forEach(restaurant => {
      const card = document.createElement("div");
      card.className = "cafe-card";  // reuse same design

      card.innerHTML = `
        <img src="images/${restaurant.image_url}" class="cafe-img">
        <div class="cafe-info">
          <h3>${restaurant.name}</h3>
          <p>${restaurant.area} ⭐ ${restaurant.rating}</p>
          <p>${restaurant.known_for}</p>
        </div>
      `;

      // 🔥 CLICK → DETAILS PAGE
      card.onclick = () => {
        window.location.href = `details.html?category=restaurant&id=${restaurant.id}`;
      };

      container.appendChild(card);
    });
  });  

// STREET FOOD
fetch("http://127.0.0.1:5000/streetfood")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("streetfood-container");

    if (!container) return; // safety

    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "cafe-card"; // reuse same design

      card.innerHTML = `
        <img src="images/${item.image_url}" class="cafe-img">
        <div class="cafe-info">
          <h3>${item.name}</h3>
          <p>${item.area} ⭐ ${item.rating}</p>
          <p>${item.known_for}</p>
        </div>
      `;

      // 🔥 CLICK → DETAILS PAGE
      card.onclick = () => {
        window.location.href = `details.html?category=street_food&id=${item.id}`;
      };

      container.appendChild(card);
    });
  });  

// EXPLORE PLACES
fetch("http://127.0.0.1:5000/explore")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("explore-container");

    if (!container) return; // safety

    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "cafe-card"; // reuse same design

      card.innerHTML = `
        <img src="images/${item.image_url}" class="cafe-img">
        <div class="cafe-info">
          <h3>${item.name}</h3>
          <p>${item.area} ⭐ ${item.rating}</p>
          <p>${item.known_for}</p>
        </div>
      `;

      // 🔥 CLICK → DETAILS PAGE
      card.onclick = () => {
        window.location.href = `details.html?category=explore_places&id=${item.id}`;
      };

      container.appendChild(card);
    });
  });  

fetch("http://127.0.0.1:5000/malls")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("malls-container");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "cafe-card";

      card.innerHTML = `
        <img src="images/${item.image_url}" class="cafe-img">
        <div class="cafe-info">
          <h3>${item.name}</h3>
          <p>${item.area} ⭐ ${item.rating}</p>
          <p>${item.known_for}</p>
        </div>
      `;

      card.onclick = () => {
        window.location.href = `details.html?category=malls&id=${item.id}`;
      };

      container.appendChild(card);
    });
  });  

fetch("http://127.0.0.1:5000/shopping_places")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("shopping-container");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "cafe-card";

      card.innerHTML = `
        <img src="images/${item.image_url}" class="cafe-img">
        <div class="cafe-info">
          <h3>${item.name}</h3>
          <p>${item.area} ⭐ ${item.rating}</p>
          <p>${item.known_for}</p>
        </div>
      `;

      card.onclick = () => {
        window.location.href = `details.html?category=shopping_places&id=${item.id}`;
      };

      container.appendChild(card);
    });
  });
  
fetch("http://127.0.0.1:5000/street_markets")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("markets-container");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "cafe-card";

      card.innerHTML = `
        <img src="images/${item.image_url}" class="cafe-img">
        <div class="cafe-info">
          <h3>${item.name}</h3>
          <p>${item.area} ⭐ ${item.rating}</p>
          <p>${item.known_for}</p>
        </div>
      `;

      card.onclick = () => {
        window.location.href = `details.html?category=street_markets&id=${item.id}`;
      };

      container.appendChild(card);
    });
  });  



// TEMPLES
fetch("http://127.0.0.1:5000/temples")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("temples-container");

    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "cafe-card"; // reuse same design

      card.innerHTML = `
        <img src="images/${item.image_url}" class="cafe-img">
        <div class="cafe-info">
          <h3>${item.name}</h3>
          <p>${item.area} ⭐ ${item.rating}</p>
          <p>${item.known_for}</p>
        </div>
      `;

      card.onclick = () => {
        window.location.href = `details.html?category=temples&id=${item.id}`;
      };

      container.appendChild(card);
    });
  });  

// FUN & ENTERTAINMENT
fetch("http://127.0.0.1:5000/fun")
  .then(res => res.json())
  .then(data => {

    const water = document.getElementById("water-container");
    const movies = document.getElementById("movies-container");
    const gaming = document.getElementById("gaming-container");
    

    if (!water) return;

    // clear all
    water.innerHTML = "";
    movies.innerHTML = "";
    gaming.innerHTML = "";


    data.forEach(item => {

      const card = document.createElement("div");
      card.className = "cafe-card";

      card.innerHTML = `
        <img src="images/${item.image_url}" class="cafe-img">
        <div class="cafe-info">
          <h3>${item.name}</h3>
          <p>${item.area} ⭐ ${item.rating}</p>
          <p>${item.known_for}</p>
        </div>
      `;

      card.onclick = () => {
        window.location.href = `details.html?category=fun&id=${item.id}`;
      };

      // 🔥 GROUPING LOGIC
      const type = item.known_for.toLowerCase();

        if (type.includes("water")) {
          water.appendChild(card);
        } 
        else if (type.includes("cinema") || type.includes("movie") || type.includes("theatre")) {
          movies.appendChild(card);
        } 
        else {
          gaming.appendChild(card);
        }

    });

  });  
// DETAILS PAGE



const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const category = params.get("category");

if (id && category) {
  fetch(`http://127.0.0.1:5000/place/${category}/${id}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("details");


// 🔥 SET BACKGROUND IMAGE
document.body.style.backgroundImage = `url(images/${data.image_url})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";


container.innerHTML = `
  <div class="details-box">
    <h2>${data.name}</h2>
    <p><b>Area:</b> ${data.area}</p>
    <p><b>Rating:</b> ⭐ ${data.rating}</p>
    <p><b>Known For:</b> ${data.known_for}</p>
    <p><b>Opening Hours:</b> ${data.opening_hours}</p>
    <p><b>Address:</b> ${data.address}</p>
    <a href="${data.location_link}" target="_blank" class="btn">View Location</a>
  </div>
`;
      
    });
}


function searchFunction() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();
    

    // 🔹 CATEGORY MATCHING
    if (
        input.includes("food") ||
        input.includes("cafe") ||
        input.includes("restaurant") ||
        input.includes("street food")
    ) {
        window.location.href = "food.html";
    }

    else if (
        input.includes("explore") ||
        input.includes("place") ||
        input.includes("tourist") ||
        input.includes("rajwada") ||
        input.includes("lal bagh") ||
        input.includes("waterfall") ||
        input.includes("park")
    ) {
        window.location.href = "explore.html";
    }

    else if (
        input.includes("shopping") ||
        input.includes("mall") ||
        input.includes("market") ||
        input.includes("clothes")
    ) {
        window.location.href = "shopping.html";
    }

    else if (
        input.includes("temple") ||
        input.includes("mandir") ||
        input.includes("religious") ||
        input.includes("ganesh") ||
        input.includes("iskcon")
    ) {
        window.location.href = "religious.html";
    }

    else if (
        input.includes("fun") ||
        input.includes("movie") ||
        input.includes("cinema") ||
        input.includes("game") ||
        input.includes("water park")
    ) {
        window.location.href = "fun.html";
    }

    // 🔹 AREA-BASED SEARCH (you can expand this)
    else if (
        input.includes("vijay nagar") ||
        input.includes("palasia") ||
        input.includes("rajwada") ||
        input.includes("mg road") ||
        input.includes("bypass") ||
        input.includes("nipania")
    ) {
        window.location.href = "explore.html"; // or homepage / explore
    }

    // ❌ NOT FOUND
    else {
        alert("No matching results found. Try something like cafes, malls, temples, or areas.");
    }
}



document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("chat-toggle");
    const chat = document.getElementById("chat-container");

    // ✅ Toggle chatbot
    toggleBtn.addEventListener("click", function () {
        if (chat.style.display === "block") {
            chat.style.display = "none";
        } else {
            chat.style.display = "block";
        }
    });

});


// ✅ Send message
function sendMsg() {
    let msgInput = document.getElementById("msg");
    let chat = document.getElementById("chat-response");

    if (!msgInput || !chat) return;

    let msg = msgInput.value.toLowerCase().trim();

    if (msg === "") return;

    // User message
    chat.innerHTML += `<div class="user-msg"><span>${msg}</span></div>`;

    let response = "";

    if (msg.includes("cafe")) {
        response = "Try Chai Sutta Bar, Godwit, Cafe Chapter One ☕";
    }
    else if (msg.includes("temple")) {
        response = "Visit Khajrana Ganesh Temple, Annapurna Temple 🛕";
    }
    else if (msg.includes("mall")) {
        response = "You can explore C21 Mall, Treasure Island Mall 🛍️";
    }
    else if (msg.includes("food")) {
        response = "Check out Sarafa Bazaar & 56 Dukan 🍴";
    }
    else {
        response = "Sorry, I didn't understand 😅 Try 'cafe', 'temple', or 'mall'";
    }

    // Bot response
    chat.innerHTML += `<div class="bot-msg"><span>${response}</span></div>`;

    // Clear input
    msgInput.value = "";

    // Auto scroll down
    chat.scrollTop = chat.scrollHeight;
}


// ✅ Quick buttons
function quickMsg(text) {
    document.getElementById("msg").value = text;
    sendMsg();
}
