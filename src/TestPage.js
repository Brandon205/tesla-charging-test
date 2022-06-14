import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function TestPage() {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('/home').then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }, [])

    return (
        <div>
            <h1>Hello</h1>
            {/* {data} */}
        </div>
    )
}