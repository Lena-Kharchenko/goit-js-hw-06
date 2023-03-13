const categoriesList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);

  const itemQuantity = item.querySelectorAll("li");
  console.log(`Elements ${itemQuantity.length}`);
});
