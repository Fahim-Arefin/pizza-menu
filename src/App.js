import Header from "./components/Header";
import PizzaMenuList from "./components/PizzaMenuList";
import Footer from "./components/Footer";

function App() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  //   const pizzaData = []

  return (
    <div className="w-[70%] mx-auto m-12">
      <div className="flex items-center justify-center tracking-widest">
        <div className=" bg-yellow-400 w-12 h-1 mr-4"></div>
        <h1 className="text-5xl text-yellow-400">Fast React Pizza CO.</h1>
        <div className=" bg-yellow-400 w-12 h-1 ml-4"></div>
      </div>
      <Header data={pizzaData} />
      <PizzaMenuList data={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;
