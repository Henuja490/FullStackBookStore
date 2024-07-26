import React, { useState } from "react";
import  axios  from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Update =()=>{
    const [books,setBooks] = useState({
        title:"",
        Description:"",
        price:"",
        cover:""

    })
    const navigate = useNavigate()
    const location = useLocation()

    const bookId = location.pathname.split("/")[2]
    const handleclick =(e)=>{
        setBooks(prev =>({...prev, [e.target.name]: e.target.value}))
    }

    const handlechange = async e =>{
        e.preventDefault()
        try {
           await axios.put("http://localhost:8800/books/"+bookId,books)  
           navigate('/')
        } catch (error) {


            
        }
    }
    return(
        <div className="form">
            <h1>Update Book</h1>
            <input type="text" placeholder="title" onChange={handleclick} name="title" />
            <input type="text" placeholder="Description" onChange={handleclick} name="Description"/>
            <input type="text" placeholder="price" onChange={handleclick} name="price"/>
            <input type="text" placeholder="cover"  onChange={handleclick} name="cover" />
            <button className="formButton" onClick={handlechange} >Update</button>
        </div>
    )
}

export default Update