import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import { getProducts } from './productos';


function App() {
  return (
    <section class="card-container">
      {getProducts().slice(1,20).map((item) => (
        <Card key={item.id} title={item.title} description={item.description} price={item.price} image={item.images[0]} category={item.category} />
      ))}
    </section>
  );
}

export default App;
