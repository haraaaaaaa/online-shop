exports.getCart = (request, response) => {
  response.render("cart", {
    pageTitle: "Cart",
    path: "/cart",
  });
};
