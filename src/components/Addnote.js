import React, { useContext, useState } from 'react';
import noteContext from '../context/Notes/noteContext';


const Addnote = (props) => {

    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });


    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added Successfully",'success')

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }



    return <div>
        <div className="container my-3">
            <h1>Add a note</h1>
            <form className='my-3' >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input onChange={onChange} minLength={5} required type="text" value={note.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" minLength={5} required className="form-control" value={note.description} id="desc" name="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>

                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    </div>;
};

export default Addnote;
