function Box(props) {
  const { className, name } = props;
  return <p className={`box ${className}`}>{name}</p>;
}

const element = (
  <div className="box-container">
    <div className="content">
      <h1 className="heading">Boxes</h1>
      <div className="boxes">
        <Box name="Small" className="small" />
        <Box name="Medium" className="medium" />
        <Box name="Large" className="large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
