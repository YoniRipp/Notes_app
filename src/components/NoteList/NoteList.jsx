import React, { useState } from "react";
import Note from "../Note/Note";
import './NoteList.css'
import NoteModal from "../NoteModal/NoteModal";

const NoteList = ({ notesList, deleteNote, editNote }) => {
    const [selectedNote, setSelectedNote] = useState({})
    const [show, setShow] = useState(false)

    return (
        <div id="NotesListContainer">
            <NoteModal show={show} setShow={setShow} selectedNote = {selectedNote} editNote = {editNote}/>
            {notesList &&
                notesList.length > 0 &&
                notesList.map(note => <Note key={note.id} note={note}
                    deleteNote={deleteNote} 
                    setSelectedNote={setSelectedNote} setShow={setShow} />)}
        </div>
    )
};

export default NoteList;