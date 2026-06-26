export const getCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product) => {
  let cart = getCart();

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = getCart().filter(
    (item) => item.id !== id
  );

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const increaseQuantity = (id) => {
  let cart = getCart();

  cart = cart.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const decreaseQuantity = (id) => {
  let cart = getCart();

  cart = cart
    .map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    )
    .filter((item) => item.quantity > 0);

  localStorage.setItem("cart", JSON.stringify(cart));
};