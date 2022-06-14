import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default TestPage = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('/home').then((response) => {
            console.log(response.data)
        })
    }, [])

    return (
        <div>
            <h1>Hello test</h1>
        </div>
    )
}