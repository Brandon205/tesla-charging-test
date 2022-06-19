import axios from 'axios';
import React, { useState } from 'react';

export default function TestPage() {
    const [data, setData] = useState('Data');

    let getVehicles = () => {
        axios.get('/vehicles').then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }

    let getVehicle = () => {
        let id = '1492931281739069'

        axios.get('/vehicle/' + id).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }

    let getVehicleChargeState = () => {
        // For now just use a hardcoded vehicle ID but later can create buttons that pass in the ID
        let id = '1492931281739069'
        axios.get(`/vehiclecharge/${id}`).then((response) => {
            console.log(response.data)
            setData(response.data)
        }).catch(error => {
            console.log('ERROR!!!: ', error)
        })
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => {getVehicles()}}>Get Vehicles</button>
            <button onClick={() => {getVehicle()}}>Get Vehicle</button>
            <button onClick={() => {getVehicleChargeState()}}>Get Charge State</button>
        </div>
    )
}