import { useState } from 'react'
import './App.css'
import NoteForm from './components/NoteForm/NoteForm'
import NoteList from './components/NoteList/NoteList'
function App() {

  const [notesList, setNotesList] = useState([])

  const addNote = (newNote) => {
    const newNotesList = [newNote, ...notesList]
    setNotesList(newNotesList);
  }

  const deleteNote = (noteID) => {
    const deletedNotesList = notesList.filter(note => note.id != noteID)
    setNotesList(deletedNotesList)
  }

  const editNote = (editNote) => {
    const editedList = notesList.map(note => {
      if (note.id === editNote.id)
        return editNote
      else
        return note
    })
    setNotesList(editedList)
  }
  return (
    <div className='AppContainer'>
      <NoteForm addNote={addNote} />
      <NoteList editNote={editNote} notesList={notesList} deleteNote={deleteNote} />
    </div>

  )
}

export default App
