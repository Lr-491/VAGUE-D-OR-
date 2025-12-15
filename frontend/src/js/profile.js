    if (!localStorage.getItem("isLoggedIn")) {
        window.location.href = "connexion.html";
        }

    const restaurantProfile = {
        name: "VAGUE D'OR",
        owner: "John Doe",
        phone: "+237 6 12 34 56 78",
        email: "contact@vaguedor.com",
        address: "Bonamoussadi, Douala - Cameroun",
        openHours: "10h00 - 23h00",
        paymentMethods: ["Chèque", "MTN Money", "Airtel Money"],
        since: "2022"
    };

   // PROFIL
    document.getElementById("restaurant-name").innerText = restaurantProfile.name;
    document.getElementById("restaurant-owner").innerText = restaurantProfile.owner;
    document.getElementById("restaurant-phone").innerText = restaurantProfile.phone;
    document.getElementById("restaurant-email").innerText = restaurantProfile.email;
    document.getElementById("restaurant-address").innerText = restaurantProfile.address;
    document.getElementById("restaurant-hours").innerText = restaurantProfile.openHours;
    document.getElementById("restaurant-since").innerText = restaurantProfile.since;

    // Paiements
    const badgeContainer = document.getElementById("payment-badges");
    restaurantProfile.paymentMethods.forEach(method => {
        const span = document.createElement("span");
        span.innerText = method;
        badgeContainer.appendChild(span);
    });

    // Historique commandes (simulation)
    const history = JSON.parse(localStorage.getItem("orders")) || [];

    const historyContainer = document.getElementById("history-container");
    let revenue = 0;

    history.forEach(order => {
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `
        <span>${order.date}</span>
        <span>${order.total} FCFA</span>
        <span>${order.payment}</span>
    `;
    historyContainer.appendChild(div);
    revenue += order.total;
    });

    document.getElementById("total-orders").innerText = history.length;
    document.getElementById("total-revenue").innerText = revenue + " FCFA";

    // LOGOUT
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {

            // Supprimer les infos de connexion
            localStorage.removeItem("isLoggedIn");
            sessionStorage.removeItem("isLoggedIn");

            alert("Vous avez été déconnecté.");

            // Redirection
            window.location.href = "connexion.html";
        });
    }
