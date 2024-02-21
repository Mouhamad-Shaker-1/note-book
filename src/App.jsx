import { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { nanoid } from "nanoid";
import NoNotes from "./components/ui-noNotes";
import Main from "./components/Main";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: JSON.parse(localStorage.getItem("notes")) || [],
      curronentNoteId: 0,
    };
    this.addNewNote = this.addNewNote.bind(this);
    this.updateCurrentNote = this.updateCurrentNote.bind(this);
    this.updateCurrentNoteInFirstNote =
      this.updateCurrentNoteInFirstNote.bind(this);
    this.updateCurrentNoteId = this.updateCurrentNoteId.bind(this);
    this.deletNote = this.deletNote.bind(this);
    this.updateCurrentNoteIdAfterDelet =
      this.updateCurrentNoteIdAfterDelet.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  }

  componentDidMount() {
    this.setState({
      curronentNoteId: this.state.notes.length && this.state.notes[0].id,
    });
  }

  deletNote(event, id) {
    event.stopPropagation();
    this.setState(
      (prevState) => {
        return {
          notes: prevState.notes.filter((note) => note.id != id),
        };
      },
      () => this.updateCurrentNoteIdAfterDelet(id)
    );
  }

  updateCurrentNoteIdAfterDelet(id) {
    if (this.state.curronentNoteId == id) {
      this.setState((prevState) => ({
        curronentNoteId: prevState.notes.length && prevState.notes[0].id,
      }));
    }
  }

  updateCurrentNoteId(id) {
    this.setState((prevState) => ({ curronentNoteId: id }));
  }

  addNewNote() {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          { id: nanoid(), title: "the title", body: "" },
        ],
      };
    }, this.updateCurrentNoteInFirstNote);
  }

  updateCurrentNoteInFirstNote() {
    if (this.state.notes.length == 1) {
      this.setState((prevState) => ({
        curronentNoteId: prevState.notes[0].id,
      }));
    }
  }

  updateCurrentNote(event) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => {
        return note.id == this.state.curronentNoteId
          ? { ...note, [event.target.name]: event.target.value }
          : note;
      }),
    }));
  }

  render() {
    // console.log(this.state.notes);
    // console.log(this.state.curronentNoteId);
    return this.state.notes.length == 0 ? (
      <NoNotes addNewNote={this.addNewNote} />
    ) : (
      <Main
        deletNote={this.deletNote}
        updateCurrentNote={this.updateCurrentNote}
        notes={this.state.notes}
        addNewNote={this.addNewNote}
        curronentNoteId={this.state.curronentNoteId}
        updateCurrentNoteId={this.updateCurrentNoteId}
      />
    );
  }
}

export default App;
