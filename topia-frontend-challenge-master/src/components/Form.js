import React, { useContext, useState } from 'react';
import { context } from '../Contexts/ModalContext';

export function Form() {

    const [coordinates, setCoordinates] = useState({
        x: 800,
        y: 400
    })

    const handelSubmit = (event) => {
        event.preventDefault()
        console.log(coordinates)
    }

    const handleChanges = (event) => {
        const newCoord = event.target.name;
        setCoordinates({
            ...coordinates,
            [newCoord]: event.target.value
        })
    };

    return (
        <div className="Form">
            <form onSubmit={handelSubmit}>My Coordinates
                <label >X</label>
                <input
                    name="x"
                    type="number"
                    defaultValue={coordinates.x}
                    onChange={handleChanges}>
                </input>
                <label >Y</label>
                <input
                    name="y"
                    type="number"
                    defaultValue={coordinates.y}
                    onChange={handleChanges}
                ></input>
                <button type="submit" >Travel</button>
            </form>
        </div>
    );
}
