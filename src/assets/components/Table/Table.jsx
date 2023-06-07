import React, { useState, useContext, useEffect } from "react";
import tableData from "../App/data.json";
import { Words } from '../Words/Words';
import './Table.css';

function Table() {
    const { words } = useContext(Words);
    const [data, setData] = useState(words);
    const [editState, setEditState] = useState(-1);
    useEffect(() => {
        setData(words);
    }, [words]);
    return (
        <div className="tableWrap">
            <div>
                <AddWord setData={setData} />
                <form onSubmit={handleUpdate} className="tableForm">
                    <table className="table">
                        <thead>
                            <th>English</th>
                            <th>Transcription</th>
                            <th>Russian</th>
                            <th>Action</th>
                        </thead>
                        {
                            data.map((current, i) => (
                                editState === current.id ? <EditWord key={i} current={current} data={data} setData={setData} /> :
                                    <tr>
                                        <td>{current.english}</td>
                                        <td>{current.transcription}</td>
                                        <td>{current.russian}</td>
                                        <td>
                                            <button type="button" className="edit" onClick={() => { handleEdit(current.id) }}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" /></svg>
                                            </button>
                                            <button type="button" className="delete" onClick={() => handleDelete(current.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg></button>
                                        </td>
                                    </tr>
                            ))
                        }
                    </table>
                </form>
            </div>
        </div >
    );
    function handleUpdate(event) {
        event.preventDefault()
        const english = event.target.elements.english.value;
        const transcription = event.target.elements.transcription.value;
        const russian = event.target.elements.russian.value;
        if (english === '' || transcription === '' || russian === '') {
            alert('Поле не должно быть пустым, введите значение');
        }
        else {
            const updateData = data.map(d => d.id === editState ? { ...d, english: english, transcription: transcription, russian: russian } : d);
            setEditState(-1)
            setData(updateData);
        }
    }
    function handleEdit(id) {
        setEditState(id)
    }
    function handleDelete(id) {
        const updateData = data.filter((d) => id !== d.id);
        setData(updateData)
    }
}

function EditWord({ current, data, setData }) {
    function handleEnglish(event) {
        const english = event.target.value;
        const updateData = data.map((d) => d.id === current.id ? { ...d, english: english } : d);
        setData(updateData);
    }
    function handleTranscription(event) {
        const transcription = event.target.value;
        const updateData = data.map((d) => d.id === current.id ? { ...d, transcription: transcription } : d);
        setData(updateData);
    }
    function handleRussian(event) {
        const russian = event.target.value;
        const updateData = data.map((d) => d.id === current.id ? { ...d, russian: russian } : d);
        setData(updateData);
    }
    return (
        <tr>
            <td><input type='text' onChange={handleEnglish} value={current.english} name='english' placeholder="Enter english" ></input></td>
            <td><input type='text' onChange={handleTranscription} value={current.transcription} name='transcription' placeholder="Enter transcription" ></input></td>
            <td><input type='text' onChange={handleRussian} value={current.russian} name='russian' placeholder="Enter russian"></input></td>
            <td><button type="submit" className="update">Update</button></td>
        </tr>)
}

function AddWord({ setData }) {
    function handleValues(event) {
        event.preventDefault();
        const english = event.target.elements.english.value;
        const transcription = event.target.elements.transcription.value;
        const russian = event.target.elements.russian.value;
        const newWord = {
            id: ++tableData.length,
            english,
            transcription,
            russian,
        }
        setData(prevDate => prevDate.concat(newWord));
        event.target.elements.english.value = "";
        event.target.elements.transcription.value = "";
        event.target.elements.russian.value = "";
    }
    return (
        <form className="addForm" onSubmit={handleValues}>
            <input type='text' name='english' placeholder="Enter english" ></input>
            <input type='text' name='transcription' placeholder="Enter transcription" ></input>
            <input type='text' name='russian' placeholder="Enter russian"></input>
            <button>Add</button>
        </form>
    )
}
export default Table;