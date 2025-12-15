const container = document.getElementById("menu-container");

// Création des cartes
menuData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="price">${item.price} FCFA</p>
        <button onclick="addToCart(${item.id})">Ajouter au panier</button>
    `;

    container.appendChild(card);
});

// =====================
// INTERSECTION OBSERVER
// =====================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // animation une seule fois
            }
        });
    },
    {
        threshold: 0.2 // 20% visible
    }
);

// Observer chaque carte
const cards = document.querySelectorAll(".card");
cards.forEach(card => observer.observe(card));


// =====================
// PANIER
// =====================

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = menuData.find(m => m.id === id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Ajouté au panier !");
}
