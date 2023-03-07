const itemsEl = [...document.querySelectorAll("li.item")];
console.log(`Number of categories:${itemsEl.length} `);
itemsEl.forEach(element => {
    const titleEl = element.firstElementChild;
    const innerLiEl = element.lastElementChild.children;
    console.log('Category:' , titleEl.textContent);
    console.log('Elements:' , innerLiEl.length);
});