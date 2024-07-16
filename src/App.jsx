import Card from "./components/Cards";

function App() {
  const item1 = {
    id: 1,
    title: "Pizza",
    image: "/pizza.jpg",
    description:
      "Pizza is a traditional Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, Pizza is a traditional Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients,Pizza is a traditional Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients,",
    price: "$ 70",
    category: "food",
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Card
          title={item1.title}
          description={item1.description}
          image={item1.image}
          price={item1.price}
        />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
