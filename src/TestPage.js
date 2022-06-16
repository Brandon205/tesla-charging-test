import axios from 'axios';
import env from 'react-dotenv';
import React, { useState } from 'react';

// ID for the Tesla: 1492931281739069

export default function TestPage() {
    const [data, setData] = useState('Data');

    let getVehicles = () => {
        axios.get('/vehicles').then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => {getVehicles()}}>Get Vehicles</button>
        </div>
    )
}