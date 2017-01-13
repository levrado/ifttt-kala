import React from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Form from '../Components/form'


const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  form: {
    flex: 1
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1
  },
};

export default class Home extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}></div>
        <div style={styles.form}>
          <Form />
        </div>
        <div style={styles.right}></div>
      </div>
    );
  }
}
