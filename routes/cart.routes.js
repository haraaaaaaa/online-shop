// requirements
const express = require("express");
const router = express.Router();

router.get("/cart", (request, response) => {
  response.render("cart", {
    pageTitle: "Cart",
    path: "/cart",
  });
});

module.exports = router;
