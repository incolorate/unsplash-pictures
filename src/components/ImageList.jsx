import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return (
      <div>
        <ImageShow
          image={image.urls.small}
          key={image.id}
          alt={image.alt_description}
        />
      </div>
    );
  });
  return <div className="columns-5 max-w-screen-xl">{renderImages}</div>;
}
export default ImageList;
