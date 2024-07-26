import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

const Books =()=>{
    const [book,setBook] = useState([])

    useEffect(()=>{
        const fetchAllBook = async ()=> {
            try {
                const res =await axios.get("http://localhost:8800/books")
                setBook(res.data)
            } catch (error) {
                console.log(error)
                
            }
        }
        fetchAllBook()
    })
    const handledelete = async (id)=>{
        try {
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h1 className="henuja">Henuja Book Store</h1>
            <div className="books">
                {book.map(book=>(
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <h2>{book.title}</h2>
                        <p>{book.Description}</p>
                        <p>{book.price}</p>
                        <button className="delete" onClick={()=> handledelete(book.id)}>Delete</button>
                        <button className="update"><Link to={`/update/${book.id}`} >Update</Link></button>

                    </div>
                ))}
            </div>
            <button className="formButton"><Link to="/add">Add New book</Link></button>
        </div>
    )
}

export default Books