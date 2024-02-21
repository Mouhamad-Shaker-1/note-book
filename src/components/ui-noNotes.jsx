

export default function NoNotes(props) {

    return (
      <div className="container-flex-col">
        <h1>You have no notes</h1>
        <button className="btn btn-primary" onClick={props.addNewNote}>create a note</button>
      </div>
    )
}