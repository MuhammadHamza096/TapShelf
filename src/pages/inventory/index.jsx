import "./inventory.scss";
import InventoryDetails from "./inventoryDetails";
import InventoryHeader from "./inventoryHeader";

const Inventory = () => {
  return (
    <div className="inventory">
      <InventoryHeader />
      <InventoryDetails />
    </div>
  );
};

export default Inventory;
