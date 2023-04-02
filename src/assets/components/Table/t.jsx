import React, { useState } from "react";
import tableData from "../App/data.json";
import './Table.css';

function Table() {
    const [data, setData] = useState(tableData);
    const [editState, setEditState] = useState(-1);
    return (
        <div className="tableWrap">
            <div>
                <AddWord setData={setData} />
                <form onSubmit={handleUpdate}>
                    <table className="table">
                        <thead>
                            <th>English</th>
                            <th>Transcription</th>
                            <th>Russian</th>
                            <th>Action</th>
                        </thead>
                        {
                            data.map((current) => (
                                editState === current.id ? <EditWord current={current} data={data} setData={setData} /> :
                                    <tr>
                                        <td>{current.english}</td>
                                        <td>{current.transcription}</td>
                                        <td>{current.russian}</td>
                                        <td>
                                            <button type="button" className="edit" onClick={() => { handleEdit(current.id) }}>Edit</button>
                                            <button type="button" className="delete" onClick={() => handleDelete(current.id)}>Delete</button>
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
        const updateData = data.map(d => d.id === editState ? { ...d, english: english, transcription: transcription, russian: russian } : d);
        setEditState(-1)
        setData(updateData);
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
            <td><button type="submit">Update</button></td>
        </tr>)
}

function AddWord({ setData }) {
    function handleValues(event) {
        event.preventDefault();
        const english = event.target.elements.english.value;
        const transcription = event.target.elements.transcription.value;
        const russian = event.target.elements.russian.value;
        const newWord = {
            id: 6,
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

/*[
    {
        "id": 1,
        "english": "look",
        "transcription": "[lʊk]",
        "russian": "смотреть / взгляд"
    },
    {
        "id": 1,
        "english": "more",
        "transcription": "[mɔːr]",
        "russian": "больше"
    },
    {
        "id": 1,
        "english": "day",
        "transcription": "[deɪ]",
        "russian": "день"
    },
    {
        "id": 1,
        "english": "could",
        "transcription": "[kʊd]",
        "russian": "мог"
    },
    {
        "id": 1,
        "english": "come",
        "transcription": "[kʌm]",
        "russian": "приходить"
    },
    {
        "id": 1,
        "english": "sound",
        "transcription": "[saʊnd]",
        "russian": "звук"
    },
    {
        "id": 1,
        "english": "people",
        "transcription": "[ˈpiː.p ə l]",
        "russian": "люди"
    }
] */