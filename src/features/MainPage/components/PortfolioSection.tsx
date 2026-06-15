import { useCarouselContext } from "../../../context/CarouselContext/useCarouselContext";

export function PortfolioSection() {
  const { images, imageIndex, increaseIndex, decreaseIndex } =
    useCarouselContext();
  return (
    <section
      id="portfolio"
      className="flex flex-col p-5 bg-primary items-center"
    >
      <div className="btn btn-primary">Portfolio</div>
      <div className="flex relative">
        <div className="carousel flex">
          {images.map((image, index) => {
            return (
              <img
                src={image}
                key={image}
                className={index === imageIndex ? "active" : ""}
              />
            );
          })}
        </div>
        <div className="btn-group absolute">
          <button
            className="btn-secondary"
            id="btn-prev"
            onClick={decreaseIndex}
          >
            &lt;
          </button>
          <button
            className="btn-secondary"
            id="btn-next"
            onClick={increaseIndex}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
