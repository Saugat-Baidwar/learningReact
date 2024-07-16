const Card = ({ title, image, description, price }) => {
  return (
    <div className="bg-red-500 text-white p-4">
      <img src={image} alt="product" className="h-28 rounded-lg" />
      <h1 className="font-extrabold mt-4">{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};
export default Card;
