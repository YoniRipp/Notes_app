import React from "react";
import Card from 'react-bootstrap/Card';
import './Note.css'
const Note = ({ note, deleteNote, setSelectedNote, setShow }) => {

    const handleDeleteNote = (e) => {
        e.stopPropagation()
        const isDelete = window.confirm("Are you sure you want to delete this note?")
        isDelete ? deleteNote(note.id) : nothing
    }

    const handleOpenModalAndSelectNote = () => {
        setSelectedNote(note)
        setShow(true)
    }

    return (
        <Card className="NoteContainer" onClick={handleOpenModalAndSelectNote}>
            <div className="DeleteBtn" onClick={handleDeleteNote}>&times;</div>
            <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted Date">{note.created}</Card.Subtitle>
                <Card.Text>{note.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Note;