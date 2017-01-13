import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuList from '../Components/menuList'

import {newParentJob, newChildJob} from '../kala/api'
import {ifMenuItemList, thenMenuItemList} from '../kala/jobs'

const styles = {
  dropDownMenu: {
    width: 350,
  },
  submitButton: {
    margin: 22
  }
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ifValue: 0, thenValue: 0, successVisible: false};
  }

  handleIfChange(event, index, value) {
    this.setState({ifValue: value});
  }

  handleThenChange(event, index, value) {
    this.setState({thenValue: value});
  }

  handleSubmit() {
    var ifValue = ifMenuItemList[this.state.ifValue];
    var thenValue = thenMenuItemList[this.state.thenValue];
    var app = this;
    newParentJob(ifValue.name, ifValue.command)
    .then(function(parentJobId) {
      newChildJob(thenValue.name, thenValue.command, parentJobId)
      .then(function(childJobId) {
        app.setState({successVisible: true})
      })
    });
  }

  render() {
    var successText = function (that) {
      if (that.state.successVisible == true) {
        setTimeout(() => that.setState({successVisible: false}), 1.5 * 1000)
        return (
           <FlatButton label="Sent request successfully" secondary={true} />
        )
      }
    }(this)

    return (
      <div>
        <h1>If</h1><br />

        <MenuList
          value={this.state.ifValue}
          onChange={this.handleIfChange.bind(this)}
          style={styles.dropDownMenu}
          autoWidth={false}
          items={ifMenuItemList}
        />

        <br />

        <h1>Then</h1><br />
        <MenuList
          value={this.state.thenValue}
          onChange={this.handleThenChange.bind(this)}
          style={styles.dropDownMenu}
          autoWidth={false}
          items={thenMenuItemList}
        />

        <br />

        <RaisedButton
          label="Submit"
          primary={true}
          style={styles.submitButton}
          onClick={() => this.handleSubmit()}
        />
        {successText}
      </div>
    )
  }
}
