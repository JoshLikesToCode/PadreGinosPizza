import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="Some delicious 'za" />
      <Pizza name="Hawaiian" description="Ham and Pineapple" />
      <Pizza name="Cheese" description="Cheesy slice of pizza!" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
