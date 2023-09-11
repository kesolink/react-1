import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

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


function App(){
  return (
  <div className='container'>
    
    <Header/>
    <Menu/>
    <Footer/>
  </div>
  );
};

function Header(){
  const style = {}
  return <header className='header footer'>
   <h1 style={ style} >Fast React Pizza co.</h1>
   </header>
}

function Menu(){
  return (
    <main className='menu'>
      <h1>Our Menu</h1>
      <p>Hello, welcome to kesolink pizza shop, here is our menu for the day, make your Order. </p>
      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza pizzaobj={pizza} key={pizza.name} />
        ))};
        
      </ul>
      
      
    </main>
    
    );
}

function Pizza({pizzaobj}){
  // if (pizzaobj.soldOut) return null;
  return (
  <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
    <img src={pizzaobj.photoName} alt={pizzaobj.name} />
    <div>
    <h1>{pizzaobj.name}</h1>
    <p>{pizzaobj.ingredients}</p>
    <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
    </div>
  </li>
  );
};





function Footer(){
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)
  console.log(hour)
  return (
    <footer>
      {isOpen ? (
      <Order  closeHour={closeHour} openHour={openHour}  />
    ):(<p>We are close untill {openHour}:00AM, come visit us or order online</p>) }
    </footer>
    );
}


function Order({closeHour,openHour}){
  return(
    <div className='order'>
        <p>We are open {openHour}:00 to {closeHour}:00, come visit us or order online</p>
        
        <button className='btn'>order</button>
      </div>
  )
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

