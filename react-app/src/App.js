import logo from "./logo.svg";
import "./App.css";
import { Persona } from "./Persona";
import Card from "./Card";


  const info = [

    {
      category: "Entretenimiento",
      title: "‘Thor: Love and Thunder’ hace de los cortos de Darryl canon en el MCU",
    },
    {
      category: "CRIPTOMONEDAS",
      title: "Aumentan las estafas con criptomonedas en YouTube",
    },
    {
      category: "APSS & SOFTWARE",
      title: "Google propone dividir su negocio publicitario ante señalamientos anticompetitivos",
    },
  ];

function App() {


  return (
    <section class="container">
      {info.map((item)=><Card category={item.category} title={item.title}/>)}
    </section>
  );
 

}

export default App;
