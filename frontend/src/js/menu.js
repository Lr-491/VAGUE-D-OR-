const container = document.getElementById("menu-container");

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

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = menuData.find(m => m.id === id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Ajouté au panier !");
}
