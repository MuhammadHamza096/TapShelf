import CustomButton from "../button";
import "./pagination.scss";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    console.log()
  return (
    <div className="pagination">
      <CustomButton
        variant="outlined"
        text="Previous"
        className="gray-color"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <CustomButton
        variant="outlined"
        text="Next"
        className="gray-color"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
