let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cart-container");
let totalElement = document.getElementById("total");

function loadCart() {
    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <p>${item.name} — ${item.price} FCFA</p>
            <button onclick="removeItem(${index})">Supprimer</button>
        `;
        container.appendChild(div);
        total += item.price;
    });

    totalElement.innerText = "Total : " + total + " FCFA";
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function validateOrder() {
    alert("Commande envoyée !");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

loadCart();
