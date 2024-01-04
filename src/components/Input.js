export const Input = ({
  handleChange,
  value,
  title,
  color,
  name,
  type = "radio",
  checked = false,
}) => {
  return (
    <>
      <label className="sidebar-label-container">
        <input
          {...{
            onChange: handleChange,
            value,
            title,
            color,
            name,
            type,
          }}
          defaultChecked={checked}
        />
        <span
          className="checkmark"
          style={{
            backgroundColor: color,
          }}></span>
        {title}
      </label>
    </>
  );
};
export default Input;
