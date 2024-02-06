import "./inventoryHeader.scss";

const InventoryHeader = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h4>Overall Inventory</h4>
        <div className="header-details">
          <div className="w-50">
            <h5 className="c-blue">Categories</h5>
            <div className="m-10">
              <p>14</p>
              <span>Last 7 days</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="w-50">
            <h5 className="c-orange">Total Products</h5>
            <div className="header-details-sub m-10">
              <div>
                <p>868</p>
                <span>Last 7 days</span>
              </div>
              <div>
                <p>$25000</p>
                <span>Revenue</span>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="w-50 m-mobile-20">
            <h5 className="c-purple">Total Selling</h5>
            <div className="header-details-sub m-10 p-mobile-30">
              <div>
                <p>5</p>
                <span>Last 7 days</span>
              </div>
              <div>
                <p>$25000</p>
                <span>Cost</span>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="w-50 m-mobile-20 ">
            <h5 className="c-red">Low Stocks</h5>
            <div className="header-details-sub m-10">
              <div>
                <p>12</p>
                <span>Ordered</span>
              </div>
              <div className="align-right">
                <p>2</p>
                <span>Not in stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryHeader;
