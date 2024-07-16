import products from "../consonants/products";

const Card = () => {
  return (
    <div>
      {products.map((item) => {
        return (
          <div className="bg-red-500 text-white p-4" key={item.id}>
            <img src={item.image} alt="product" className="h-28 rounded-lg" />
            <h1 className="font-extrabold mt-4">{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
