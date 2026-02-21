// import "./App.css"
import Menu from "../Menu"
const MenuApp = (data) => {
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
        menuData={data}
        
        // menuItems={[
        //   {
        //     itemId: 1,
        //     itemPrice: "12",
        //     itemName: "Lasagne",
        //     itemDescription:
        //       "Meat and cheese layered between house-made pasta with bell peppers and onions.",
        //   },
        // ]}

      ></Menu>
      
      <Menu
        menuName="Dessert"

      ></Menu>      
      {/* <MenuItem items={menuItem}></MenuItem> */}
    </div>
  )
  //   return (
  //   <div className="MenuApp">
  //   <Menu />
  //   {/* // example */}
  //   {/* <MenuApp menudata = {data} /> */}
  //   {/* // how it looks like in actual application */}
  //   </div>
  // )
}

export default MenuApp