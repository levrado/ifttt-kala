import React from "react";
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

export default class MenuList extends React.Component {

  render() {
    var menuList = this.props.items.map(function(menuItem, index) {
      return (
        <MenuItem key={index + menuItem.text} value={index} primaryText={menuItem.text} />
      )
    })
    return (
      <div>
        <DropDownMenu
          value={this.props.value}
          onChange={this.props.onChange}
          style={this.props.style}
          autoWidth={false}
        >
          {menuList}
        </DropDownMenu>
      </div>
    )
  }
}
