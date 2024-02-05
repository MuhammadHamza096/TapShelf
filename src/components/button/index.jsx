import "./button.scss";
import Button from "@mui/material/Button";

const CustomButton = ({
  Icon,
  text,
  variant,
  className,
  onClick,
  disabled,
}) => {
  return (
    <div className="">
      <Button
        variant={variant}
        className={`${className} button`}
        size="small"
        onClick={onClick}
        disabled={disabled}
        startIcon={Icon ? <Icon /> : <></>}
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
