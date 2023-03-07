function ImageShow({ image, alt }) {
  return (
    <img src={image} alt={alt} className="w-full rounded shadow-lg p-5 my-5 " />
  );
}

export default ImageShow;
