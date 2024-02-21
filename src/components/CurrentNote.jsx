import "bootstrap/dist/css/bootstrap.css";

import { Component } from "react";

export default class CurrentNote extends Component {
  render() {
    let currentNoteId;
    for (let i = 0; i < this.props.notes.length; i++) {
      if (this.props.notes[i].id == this.props.curronentNoteId) {
        currentNoteId = i;
      }
    }

    return (
      <div className="write-note">
        <div className="mb-3">
          {this.props.screen == "small" && !this.props.displaySidebar && (
            <button
              onClick={this.props.toggleSidebarDisplay}
              className="btn btn-primary"
            >
              {">"}
            </button>
          )}
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            maxLength={20}
            className="form-control"
            id="exampleFormControlInput1"
            value={
              this.props.notes[currentNoteId == undefined ? 0 : currentNoteId]
                .title
            }
            onChange={(event) => this.props.updateCurrentNote(event)}
            name="title"
          />
        </div>
        <div className="mb-3 full">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            textarea:
          </label>
          <textarea
            value={
              this.props.notes[currentNoteId == undefined ? 0 : currentNoteId]
                .body
            }
            onChange={(event) => this.props.updateCurrentNote(event)}
            name="body"
            className="form-control full"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    );
  }
}
