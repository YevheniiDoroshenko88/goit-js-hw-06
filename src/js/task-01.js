const categoriesRefs = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesRefs.length);


for (const categoryRef of categoriesRefs) {
    const header = categoryRef.firstElementChild.textContent
    console.log('Category:', header);
    const categoryElRef = categoryRef.lastElementChild.children
    console.log('Elements:', categoryElRef.length);
}
