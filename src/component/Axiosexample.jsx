import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Axiosexample = () => {

    let [state, setState] =useState([])
    let handleChange = async () => {
        let res = await axios.get("https://fakestoreapi.com/products")
        console.log(res)
        let {data} = res
        console.log(data)
        setState(data)
    }

    useEffect(() => {
    handleChange() 
}, [])

  return (
    <div>
        <table border="5px solid">
            <thead>
                <tr>
                    <th>sno</th>
                    <th>title</th>
                    <th>price</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((value) => {
                        return (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>{value.price}</td>
                                <td> <img src={value.image} /> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Axiosexample