
const Pizza = ({ name, description, image }) => {

  return (
    <div className="pizza" onClick={() => { }} >
      <h1>
        {name}
      </h1>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Pizza;
