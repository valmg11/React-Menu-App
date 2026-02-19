// import "./App.css"
import Menu from "../Menu"
const MenuApp = () => {
  // let menuItem = {         
  //   "itemId": 1,         
  //   "itemPrice": "12",         
  //   "itemName": "Lasagne",         
  //   "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions." 
  // }

  // below is an example, but in the actual application you pass the data using props to the menuapp function component.
  return (
    <div className="App">
      <Menu
        menuName="Dinner"
        menuItems={[
          {
            itemId: 1,
            itemPrice: "12",
            itemName: "Lasagne",
            itemDescription:
              "Meat and cheese layered between house-made pasta with bell peppers and onions.",
          },
        ]}
      ></Menu>
      {/* <MenuItem items={menuItem}></MenuItem> */}
    </div>
  )
}

export default MenuApp