import { useState } from "react";
import AddProductModal from "../../../components/addProductModal";
import CustomButton from "../../../components/button";
import Pagination from "../../../components/pagination";
import Table from "../../../components/table";
import "./inventoryDetails.scss";
import FilterListIcon from "@mui/icons-material/FilterList";

const itemsPerPage = 5;

const InventoryDetails = () => {
  const columns = [
    "Products",
    "Buying Price",
    "Quantity",
    "Threshold Value",
    "Expiry Date",
    "Delete",
  ];
  const rows = [
    {
      id: "1",
      name: "Maggi",
      price: 430,
      quantity: 43,
      threshold: 12,
      expiryDate: "11/12/22",
      unit: "kg",
      category: "abc",
    },
    {
      id: "2",
      name: "Bru",
      price: 430,
      quantity: 43,
      threshold: 12,
      expiryDate: "11/12/22",
      unit: "kg",
      category: "abc",
    },
    {
      id: "3",
      name: "Red bull",
      price: 430,
      quantity: 43,
      threshold: 12,
      expiryDate: "11/12/22",
      unit: "kg",
      category: "abc",
    },
    {
      id: "4",
      name: "Maggi",
      price: 430,
      quantity: 43,
      threshold: 12,
      expiryDate: "11/12/22",
      unit: "kg",
      category: "abc",
    },
    {
      id: "5",
      name: "Bourn Vita",
      price: 430,
      quantity: 43,
      threshold: 12,
      expiryDate: "11/12/22",
      unit: "kg",
      category: "abc",
    },
  ];
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(rows);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);
  return (
    <div className="inventory-details">
      <div className="inventory-details-header">
        <h4>Products</h4>
        <div className="inventory-button-actions">
          <CustomButton
            variant="contained"
            text="Add product"
            className="blue-color"
            onClick={() => setOpen(true)}
          />
          <CustomButton
            variant="outlined"
            text="filter"
            className="gray-color"
            Icon={FilterListIcon}
          />
          <CustomButton
            variant="outlined"
            text="Download all"
            className="gray-color"
          />
        </div>
      </div>
      <div className="inventory-details-table">
        <Table
          rows={displayedProducts}
          columns={columns}
          onDelete={handleDelete}
        />
        {products.length > 0 && (
          <div className="pagination-container">
            <Pagination
              totalPages={Math.ceil(products.length / itemsPerPage)}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>

      <AddProductModal
        open={open}
        setOpen={setOpen}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default InventoryDetails;
