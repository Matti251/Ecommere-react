import "../Recommended/Recommended.css";

export const Button = (
  onClickhandler,
  value,
  title
) => {
  return (

    <>
      <button className="btn btn-sm animated-button victoria-two">
        <a
          href="#"
          className="btn btn-sm animated-button victoria-two"
          onClick={onClickhandler}
          value={value}>
          {title}
        </a>
      </button>
    </>
  );
};
export default Button;
