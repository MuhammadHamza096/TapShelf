import "./imageUpload.scss";
const ImageUpload = () => {
  return (
    <div className="image-upload">
      <div className="image-upload-box"></div>
      <div className="image-upload-content">
        <p>Drag Image here </p>
        <p className="align-center">or</p>
        <p className="c-blue align-center p-12">Browse Image</p>
      </div>
    </div>
  );
};

export default ImageUpload;
