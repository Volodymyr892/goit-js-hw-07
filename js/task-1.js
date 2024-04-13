const categories = document.querySelectorAll('.item');

categories.forEach(category => {
  const categoryS = category.querySelector('h2');
  const items = category.querySelectorAll('li');
  const categoryName = categoryS.textContent;
  const itemsCount = items.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Items count: ${itemsCount}`);
});
