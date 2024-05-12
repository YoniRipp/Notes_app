import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NoteForm from "../NoteForm/NoteForm";

const NoteModal = ({ show, selectedNote, setShow, editNote }) => {
    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <NoteForm selectedNote={selectedNote} editNote={editNote} setShow = {setShow}/>
        </Modal>
    )
}

export default NoteModal;