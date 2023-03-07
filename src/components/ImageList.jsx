import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return (
      <ImageShow
        image={image.urls.small}
        key={image.id}
        alt={image.alt_description}
      />
    );
  });

  return (
    <div className="columns-1 sm:columns-2 md:columns-3">{renderImages}</div>
  );
}
export default ImageList;
