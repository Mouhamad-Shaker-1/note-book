import { Component } from "react";

export default class Note extends Component {
  render() {
    return (
      <div
        className={`note ${
          this.props.curronentNoteId == this.props.id
            ? "bg-info"
            : "bg-info-subtle"
        }`}
        onClick={() => this.props.updateCurrentNoteId(this.props.id)}
      >
        <div className="write">
          <div className="title">{this.props.note.title}</div>
          <p>
            {this.props.note.body.substring(0, 26) +
              (this.props.note.body.length > 26 ? "..." : "")}
          </p>
        </div>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={(event) => this.props.deletNote(event, this.props.id)}
        >
          X
        </button>
      </div>
    );
  }
}
