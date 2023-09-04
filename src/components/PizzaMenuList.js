import PizzaMenu from "./PizzaMenu";

export default function PizzaMenuList({ data }) {
  return (
    <div className="flex flex-wrap p-12 justify-end">
      {data.map((pizza) => {
        return <PizzaMenu data={pizza} key={pizza.name} />;
      })}
    </div>
  );
}
