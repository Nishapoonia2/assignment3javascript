class Smoothie {
    constructor(name, fruit, sweetener, extras) {
        this.name = name;
        this.fruit = fruit;
        this.sweetener = sweetener;
        this.extras = extras;
    }

    getPrice() {
        // You can add pricing logic based on the ingredients and extras selected
        // For simplicity, let's assume each ingredient and extra costs $1
        const basePrice = 3;
        const extraPrice = 1;
        return basePrice + (this.extras.length * extraPrice);
    }

    getDescription() {
        return `Name: ${this.name}<br>Fruit: ${this.fruit}<br>Sweetener: ${this.sweetener}<br>Extras: ${this.extras.join(', ')}<br>Price: $${this.getPrice()}`;
    }
}

document.getElementById('orderButton').addEventListener('click', function() {
    const smoothieName = document.getElementById('smoothieName').value;
    const selectedFruit = document.getElementById('fruit').value;
    const sweetener = document.querySelector('input[name="sweetener"]:checked').value;
    const selectedExtras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(el => el.value);

    const smoothie = new Smoothie(smoothieName, selectedFruit, sweetener, selectedExtras);
    displaySmoothieDescription(smoothie);
});

function displaySmoothieDescription(smoothie) {
    const smoothieDescriptionDiv = document.getElementById('smoothieDescription');
    smoothieDescriptionDiv.innerHTML = smoothie.getDescription();
}
