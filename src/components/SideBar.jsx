import "bootstrap/dist/css/bootstrap.css";

import { Component } from "react";
import Note from "./Note";

export default class SideBar extends Component {
  render() {
    const notesElement = this.props.notes.map((note) => {
      return (
        <Note
          deletNote={this.props.deletNote}
          key={note.id}
          curronentNoteId={this.props.curronentNoteId}
          id={note.id}
          note={note}
          updateCurrentNoteId={this.props.updateCurrentNoteId}
        />
      );
    });

    // style for close bar and open => info from the parent
    const styles = {
      display: this.props.displaySidebar ? "block" : "none",
    };

    return (
      <div style={styles} className="notes-info bg-secondary-subtle">
        <div className="container-btn">
          {this.props.screen == "small" && (
            <button
              onClick={this.props.toggleSidebarDisplay}
              className="btn btn-primary"
            >
              {"<"}
            </button>
          )}
          <button
            onClick={this.props.addNewNote}
            className="btn create-note btn-primary"
          >
            create a note
          </button>
        </div>
        <div className="list-notes">{notesElement}</div>
      </div>
    );
  }
}
