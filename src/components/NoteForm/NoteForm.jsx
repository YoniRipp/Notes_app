import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { nanoid } from 'nanoid'
import './NoteForm.css'


const NoteForm = ({ addNote, selectedNote ,editNote, setShow}) => {

    const [noteTitle, setNoteTitle] = useState(selectedNote ? selectedNote.title : '')
    const [noteText, setNoteText] = useState(selectedNote ? selectedNote.text : '')

    const handleAddEdit = (e) => {
        e.preventDefault();

        if(selectedNote){

            const editedNote = {
                ...selectedNote,
                text : noteText,
                title : noteTitle,
                updatedOn :  new Date().toLocaleString()
            }
            editNote(editedNote)
            setShow(false)
        }
        else{
            const newNote = {
                title: noteTitle ? noteTitle : 'Default Title',
                text: noteText,
                id: nanoid(),
                created: new Date().toLocaleString()
            };
            addNote(newNote)
        }
        setNoteText('')
        setNoteTitle('')
    }
    return (
        <Form className="NoteFormContainer" onSubmit={handleAddEdit}>
            <Form.Group className="mb-3">
                <Form.Label>Note Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Note Text</Form.Label>
                <Form.Control as='textarea' rows={3} placeholder="Enter Text" value={noteText} onChange={(e) => setNoteText(e.target.value)} required/>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!noteText}>
                {selectedNote ? 'Edit Note' : 'Add Note'}
            </Button>
        </Form>
    )
}

export default NoteForm;