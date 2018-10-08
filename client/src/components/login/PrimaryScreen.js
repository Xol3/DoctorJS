import React, { Component, Fragment } from "react";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SugarSub from "../sugarIntake/SugarSub.jsx";
import BloodPressure from "../bloodPressure/BloodPressure.jsx";

class UploadScreen extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h2>Sugar intake</h2>
          <SugarSub />
          <br />
          <br />
          <h2>Blood Pressure</h2>
          <BloodPressure />
        </div>
      </Fragment>
    );
  }
}
export default UploadScreen;
