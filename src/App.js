import './App.css';
import MenuItem from './components/MenuItem';
import React from 'react';
import {useState} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {

  const [count, setCount] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  const incCount = (id, price) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1
    }));
    setSubtotal(subtotal + price)
  };

  const decCount = (id, price) => {
    setCount((prevCounts) => {
      const newCount = Math.max((prevCounts[id] || 0) - 1, 0);
      if (prevCounts[id] && prevCounts[id] > 0) {
        setSubtotal(subtotal - price > 0 ? subtotal - price : 0);
      }
      return {
        ...prevCounts,
        [id]: newCount
      };
    });
  };

  const clear = () => {
    if (subtotal === 0) {
      alert("No items in cart");
    } else {
      setSubtotal(0);
      setCount({});
    }
  };

  const handleButtonClick = () => {
    let alertMsg = `Order Placed! \n`;
    menuItems.forEach(item => {
      if (count[item.id] > 0) {
        alertMsg += `${count[item.id]} ${item.title} `;
      }
    });
    alert(alertMsg);
  };

  return (
    <div>
        <img src={process.env.PUBLIC_URL+`/images/logo.jpg`} alt="logo" className='logo'></img>
        <h1>Taste of Japan</h1>
        <p className="slogan"> Authentic Japanese Cuisine. </p>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem 
            key={item.id} 
            title={item.title}
            description={item.description}
            price={item.price}
            count={count[item.id] || 0}     
            incCount={() => incCount(item.id, item.price)} 
            decCount={() => decCount(item.id, item.price)}/>
        ))}
      </div>
      <div className="cart">
        Subtotal: ${subtotal}
        <button className="cart-button" onClick={handleButtonClick}> Order </button>
        <button className="cart-button" onClick={clear}> Clear All </button>
      </div>
    </div>
  );  
}

export default App;
