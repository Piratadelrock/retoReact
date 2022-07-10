import logo from "./logo.svg";
import "./App.css";
import { Persona } from "./Persona";
import Card from "./Card";


  const info = [
    {
      title: "",
      category: "Entretenimiento",
    },
    {
      title: "",
      category: "Entretenimiento",
    },
    {
      title: "",
      category: "Entretenimiento",
    },
  ];

function App() {


  return (
    <section class="container">
      {info.map((item)=><Card category={item.category} title={item.title}/>)}
    </section>
  );
 


  // const name = 'jairo';
  // return (
  //   <div>
  //       <h1>Inicio!</h1>
  //       <Persona personName={name} />
  //   </div>
  // );

  // function formatName(user) {
  //   return user.firstName + " " + user.lastName;
  // }
  // const user = {
  //   firstName: "Emmanuel",
  //   lastName: "Lopera",
  // };

  // const myHtml = '<em>esto es malo</em>';
  // return (
  //   <div>
  //     <h1>hello!</h1>
  //     <h1>Good to see {myHtml}</h1>
  //   </div>
  // );

  // const nombre = "piratadelrock";
  // const condition = 1 === 0;
  // return (

  //   <div>
  //     <p>Hola soy {nombre} y estoy arpendiendo React</p>

  //   </div>

  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>

  // );
}

export default App;
