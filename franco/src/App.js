

import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu.js'
import Animal from './componentes/Animal.js'



function App() {
     const menuItems = ["Mamiferos", "Resptiles", "Aves", "Peces", "Anfibios"]
     const animalItems= [
            {nombre: "oso", src:"oso.jpg"},
            {nombre: "leon", src:"./leon.jpg"},
            {nombre: "tigre", src:"./tigre.jpg"}
        ]
  return (
    <>
    <div className="menu">
        {
            menuItems.map((menuItems)=>{
                console.log('menu item', menuItems)
                return <Menu menuName= {menuItems}/>
            })
        }
    
    </div>

<br/>
    
        {
            animalItems.map((animalItems)=>{
                return <Animal animal={animalItems}/>
            })
        }
    
    
</>
  );
}

export default App;
