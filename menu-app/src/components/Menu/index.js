import React from "react"
import MenuItem from "../MenuItem"
export default class Menu extends React.Component {
  render() {
    return (
      // <p>hi</p>
      <div><h1>{this.props.menuName} Menu</h1>
      <MenuItem {...this.props.menuItems[0]}></MenuItem>
      </div>
      )
    }
  }

//NOTE: The above sample code only displays the first element of 
// the list of Menu items. You must modify the code to correctly 
// instantiate the number of menu items as there are in the menuItems 
// property that is passed into the component.

// DO NOT USE ARRAY INDICES, as these will never account for arrays 
// of different lengths. Don't make any assumptions about the length of arrays

//The above code will get you started but does not contain every element and every part of the program.

// Those are for you to add based on the examples and based on the specification.