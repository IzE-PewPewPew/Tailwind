const productList = document.getElementById("product-list");
const cartCountElement = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("tailwindCart")) || [];

// Fetch and display products
async function fetchProducts() {
  try {
    productList.innerHTML = `<div class="col-span-full text-center">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <p class="text-blue-500 font-medium mt-2">Loading products...</p>
    </div>`;

    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    productList.innerHTML = `<p class="text-red-500 col-span-full text-center">Failed to load products. Please try again later.</p>`;
  }
}

// Display products
function displayProducts(products) {
  productList.innerHTML = products
    .map(
      (product) => `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col card">
        <img src="${product.image}" alt="${product.title}" class="h-48 object-contain p-4 bg-gray-100">
        <div class="p-4 flex-grow">
          <h3 class="text-lg font-semibold text-gray-800">${product.title}</h3>
          <p class="text-blue-500 font-bold mt-2">$${product.price.toFixed(2)}</p>
        </div>
        <div class="p-4 bg-gray-50">
          <button class="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-md hover:from-indigo-500 hover:to-blue-500"
            onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">
            Add to Cart
          </button>
        </div>
      </div>`
    )
    .join("");
}

// Add to cart
function addToCart(id, title, price, image) {
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id, title, price, image, quantity: 1 });
  }
  updateCart();
}

// Update cart count
function updateCart() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCountElement.textContent = totalItems;

  localStorage.setItem("tailwindCart", JSON.stringify(cart));
}

// Initialize
updateCart();
fetchProducts();
