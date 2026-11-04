const categories = document.querySelectorAll(".item");
const categoryNames = document.querySelectorAll(".item-heading");
const categoryElements = document.querySelectorAll(".item-list-point");

const getTotalAmount = () => {
    let total = 0;
    for (const category of categories) {
        total += 1;
    };
    return `Number of categories: ${total}`;
};

console.log(getTotalAmount());

const getCategoryAndAmount = () => {
    for (const category of categories) {
        const name = category.querySelector('.item-heading').textContent;
        const amount = category.querySelectorAll(".item-list-point");

        console.log(`Category: ${name}`);
        console.log(`Elements: ${amount.length}`);
    }
};

getCategoryAndAmount();