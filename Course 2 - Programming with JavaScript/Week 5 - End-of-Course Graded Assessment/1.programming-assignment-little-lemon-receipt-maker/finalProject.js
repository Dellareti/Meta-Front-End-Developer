// Dados fornecidos
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implementação da função getPrices()
function getPrices(taxBoolean) {
    for (let comida of dishData) {
        let finalPrice;

        if (taxBoolean === true) {
            finalPrice = comida.price * tax;
        } else if (taxBoolean === false) {
            finalPrice = comida.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        // Removendo espaços extras e formatando corretamente a saída
        console.log(`Dish: ${comida.name} Price: $${finalPrice.toFixed(2)}`);
    }
}

// Implementação da função getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    // Validação do número de convidados
    if (typeof guests === "number" && guests >= 0 && guests <= 30) {
        let discount = 0;

        // Aplicando desconto baseado no número de convidados
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }

        console.log(`Discount is: $${discount}`);
    } else {
        // Mensagem de erro se o número de convidados estiver fora do intervalo
        console.log("The second argument must be a number between 0 and 30");
    }
}

// Chamadas para a função getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);

