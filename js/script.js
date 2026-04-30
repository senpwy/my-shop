const buyButton = document.querySelector(".buy-btn");
const viewButtons = document.querySelectorAll(".view-btn");
const productCards = document.querySelectorAll(".product-card");
const footer = document.querySelector(".footer");

buyButton.addEventListener("click", function (event) {
    event.preventDefault();

    const answer = confirm("Бажаєте перейти до каталогу товарів?");

    if (answer) {
        document.querySelector("#products").scrollIntoView({
            behavior: "smooth"
        });

        alert("Відкриваємо каталог товарів!");
    } else {
        alert("Ви залишились на головній сторінці.");
    }
});

viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const productName = button.parentElement.querySelector("h3").textContent;
        alert("Ви відкрили товар: " + productName);
    });
});

productCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "scale(1)";
    });
});

const date = new Date();
const year = date.getFullYear();

const yearText = document.createElement("p");
yearText.textContent = "© " + year + " MyShop. Усі права захищені.";
footer.appendChild(yearText);