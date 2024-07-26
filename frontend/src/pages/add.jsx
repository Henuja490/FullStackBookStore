import React, { useState } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";

const Add =()=>{
    const [books,setBooks] = useState({
        title:"",
        Description:"",
        price:"",
        cover:""

    })
    const navigate = useNavigate()
    const handleclick =(e)=>{
        setBooks(prev =>({...prev, [e.target.name]: e.target.value}))
    }

    const handlechange = async e =>{
        e.preventDefault()
        try {
           await axios.post("http://localhost:8800/books",books)  
           navigate('/')
        } catch (error) {

            
        }
    }
    return(
        <div className="form">
            <h1>Add New Book</h1>
            <input type="text" placeholder="title" onChange={handleclick} name="title" />
            <input type="text" placeholder="Description" onChange={handleclick} name="Description"/>
            <input type="text" placeholder="price" onChange={handleclick} name="price"/>
            <input type="text" placeholder="cover"  onChange={handleclick} name="cover" />
            <button className="formButton" onClick={handlechange} >Add</button>
        </div>
    )
}

export default Add