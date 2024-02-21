import "bootstrap/dist/css/bootstrap.css";

import { Component, useEffect } from "react";
import SideBar from "./SideBar";
import CurrentNote from "./CurrentNote";

export default class Mian extends Component {
  constructor() {
    super();
    this.state = {
      screen: window.innerWidth < 750 ? "small" : "large",
      displaySidebar: true,
    };

    this.handlerResize = this.handlerResize.bind(this);
    this.toggleSidebarDisplay = this.toggleSidebarDisplay.bind(this);
  }

  // this funciton to close sidebar and open
  toggleSidebarDisplay() {
    this.setState((prevStates) => ({
      displaySidebar: !prevStates.displaySidebar,
    }));
  }

  // this function to know if screen small or large
  handlerResize() {
    if (window.innerWidth < 750) {
      this.setState({ screen: "small" });
    } else {
      this.setState({ screen: "large" });
    }
  }

  render() {
    // to work the function every time you change the width
    window.addEventListener("resize", this.handlerResize);

    return (
      <div className="app">
        <SideBar
          curronentNoteId={this.props.curronentNoteId}
          addNewNote={this.props.addNewNote}
          notes={this.props.notes}
          toggleSidebarDisplay={this.toggleSidebarDisplay}
          displaySidebar={this.state.displaySidebar}
          screen={this.state.screen}
          updateCurrentNoteId={this.props.updateCurrentNoteId}
          deletNote={this.props.deletNote}
        />
        <CurrentNote
          curronentNoteId={this.props.curronentNoteId}
          updateCurrentNote={this.props.updateCurrentNote}
          notes={this.props.notes}
          toggleSidebarDisplay={this.toggleSidebarDisplay}
          screen={this.state.screen}
          displaySidebar={this.state.displaySidebar}
        />
      </div>
    );
  }
}
