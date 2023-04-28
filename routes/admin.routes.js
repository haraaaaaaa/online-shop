// Requirements
const express = require("express");
const router = express.Router();
const {
  getAddProduct,
  getAdminOrders,
  getAdminProducts,
  postAddProduct,
  editProduct,
  postEditProduct,
  getDeleteProduct,
} = require("../controllers/admin-controllers");

router.get("/admin/add-product", getAddProduct);
router.post("/admin/add-product", postAddProduct);

router.get("/admin/products", getAdminProducts);

router.get("/admin/orders", getAdminOrders);

router.get("/admin/products/:id/edit", editProduct);
router.post("/admin/products/:id/edit", postEditProduct);

router.get("/admin/products/:id/delete", getDeleteProduct);

module.exports = router;
