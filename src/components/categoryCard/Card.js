import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
export const Card = ({Products}) => {
  const {
    img,
    category,
    name,
    seller,
    price,
    stock,
    ratings,
    ratingsCount,
  } = Products;
  return (
    <>
      <div
        className="card block"
        data-aos="fade-left">
        <div className="img-div bg">
          <img
            src={img}
            className="card-img-top w-70 "
            alt="..."
          />
        </div>
        <div className="head">
          <h2>
            <span>{seller}</span>
          </h2>
        </div>
        <div className="card-body flex-grow-0 ">
          <h5 className="card-title">{name}</h5>
          <div className="d-flex">
            <div className="review">
              {ratings}
              {ratingsCount}
            </div>
          </div>
          {price}
          <div>
            <b>{seller}</b>
          </div>
        </div>
        <div className="iconBox">
          <div className="icon">
            <i className="fas fa-home"></i>
          </div>
          <div className="icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="icon">
            <i className="fas fa-link"></i>
          </div>
          <div className="icon">
            <i className="fas fa-reply"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
AOS.init();
