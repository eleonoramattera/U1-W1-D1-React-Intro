const ButtonComponent = (props) => {
  return (
    <span
      style={{
        backgroundColor: props.bg,
        fontSize: "20px",
        borderRadius: "10px",
        padding: "20px",
        margin: "30px",
      }}
    >
      {props.title}{" "}
    </span>
  );
};

export default ButtonComponent;
