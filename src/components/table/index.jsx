import "./table.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = ({ columns, rows, onDelete }) => {
  const reversedProducts = [...rows].reverse();

  return (
    <div className="table-container">
      <table>
        {/* <thead> */}
          <tr>
            {columns.map((column) => {
              return <th>{column}</th>;
            })}
          </tr>
        {/* </thead> */}
        {/* <tbody> */}
          {reversedProducts.map((row) => {
            return (
              <tr>
                <td>{row.name}</td>
                <td>${row.price}</td>
                <td>{row.quantity} Packets</td>
                <td>{row.threshold} Packets</td>
                <td>{row.expiryDate}</td>
                <td>
                  <DeleteIcon
                    className="delete-icon"
                    onClick={() => onDelete(row.id)}
                  />
                </td>
              </tr>
            );
          })}
        {/* </tbody> */}
      </table>
    </div>
  );
};

export default Table;
