const categories = document.querySelectorAll(".item");

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
        const name = category.querySelector('h2').textContent;
        const amount = category.querySelectorAll("ul li");

        console.log(`Category: ${name}`);
        console.log(`Elements: ${amount.length}`);
    }
};

getCategoryAndAmount();