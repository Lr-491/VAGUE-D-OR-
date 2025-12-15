let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cart-container");
let totalElement = document.getElementById("total");
let totalElementLivraison = document.getElementById("livraison_livraison");

if (
    !localStorage.getItem("isLoggedIn") &&
    !sessionStorage.getItem("isLoggedIn")
) {
    window.location.href = "connexion.html";
}

const livraison = 1500;

function loadCart() {
    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <p>${item.name} — ${item.price} FCFA</p>
            <img src=${item.img} alt=${item.name}>
            <button onclick="removeItem(${index})">Supprimer</button>
        `;
        container.appendChild(div);
        total += item.price;
    });

    totalElement.innerText = "Total : " + total + " FCFA";
    totalElement.style.marginTop = "50px"
    totalElementLivraison.innerHTML = `Total + livraison : ${total + livraison} FCFA`
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
function validateOrder() {

    // Récupérer le moyen de paiement choisi
    const paymentSelected = document.querySelector('input[name="payment"]:checked');

    // Vérification
    if (!paymentSelected) {
        alert("Veuillez choisir un moyen de paiement avant de valider.");
        return;
    }

    const paymentMethod = paymentSelected.value;

    // Message selon le mode de paiement
    let message = "";

    switch (paymentMethod) {
        case "cheque":
            message = "Commande validée.\nPaiement par chèque à la livraison.";
            break;

        case "mtn":
            message = "Commande validée.\nVous serez contacté pour le paiement MTN.";
            break;

        case "airtel":
            message = "Commande validée.\nVous serez contacté pour le paiement Airtel.";
            break;
    }

    alert(message);

    // Vider le panier
    localStorage.removeItem("cart");

    localStorage.setItem("orders", JSON.stringify(cart));
    // Redirection
    window.location.href = "../index.html";
}
