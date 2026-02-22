// import "./App.css"
import Menu from "../Menu/index"
const MenuApp = (props) => {
  // let menuItem = {         
  //   "itemId": 1,         
  //   "itemPrice": "12",         
  //   "itemName": "Lasagne",         
  //   "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions." 
  // }
  // below is an example, but in the actual application you pass the data using props to the menuapp function component.
  // console.log(props.data);
  // console.log("menu name dinner", props.data[0].menuName)
  //props.data.menuData does not work
  return (
    <div className="App">
      {/* <Menu
        // menuName="Dinner"
        menuName={props.data[0].menuName}
        menuItems={props.data[0].menuItems}
        

      ></Menu>
      
      <Menu
        // menuName="Dessert"
        menuName={props.data[1].menuName}
        menuItems={props.data[1].menuItems}

      ></Menu>       */}
      {/* {props.data.map((menuName) => (<Menu key={menuName}/>))} works*/}
      {props.data.map((menu) => (<Menu
        key={menu.menuName}
        menuName={menu.menuName}
        menuItems={menu.menuItems}/>))}

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