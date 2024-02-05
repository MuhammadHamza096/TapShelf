import CustomButton from "../button";
import "./addProductModal.scss";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import ImageUpload from "../imageUpload";
import Input from "../inputBox";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  p: 2,
  borderRadius: "4px",
};
const AddProductModal = ({ open, setOpen, setProducts, products }) => {
  const [productData, setProductData] = useState({
    name: "",
    id: "",
    category: "",
    price: 0,
    quantity: "",
    unit: "",
    expiryDate: "",
    threshold: 0,
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductData({ ...productData, [name]: value });
  };
  console.log("product data", productData);
  return (
    <Modal open={open}>
      <Box sx={style} className="modal-box">
        <h4>New Product</h4>
        <div>
          <ImageUpload />
        </div>
        <div className="form">
          <div className="form-control">
            <label>Product Name</label>
            <Input
              placeholder="Enter product name"
              name="name"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label>Product ID</label>
            <Input
              placeholder="Enter product ID"
              name="id"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label>Category</label>
            <Input
              placeholder="Select product category"
              name="category"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label>Buying Price</label>
            <Input
              placeholder="Enter buying price"
              name="price"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label>Quantity</label>
            <Input
              placeholder="Enter product quantity"
              name="quantity"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label>Unit</label>
            <Input
              placeholder="Enter product unit"
              name="unit"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label>Expiry Date</label>
            <Input
              placeholder="Enter expiry date"
              name="expiryDate"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label>Threshold Value</label>
            <Input
              placeholder="Enter threshold value"
              name="threshold"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="button-actions">
          <CustomButton
            variant="outlined"
            text="discard"
            className="gray-color"
            onClick={() => setOpen(false)}
          />
          <CustomButton
            variant="contained"
            text="Add Product"
            className="blue-color"
            onClick={() => {
              setProducts([...products, productData]);
              setOpen(false);
            }}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
