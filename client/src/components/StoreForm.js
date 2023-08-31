import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";

import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
export default () => {
    //keep track of what is being typed via useState hook
    
    const [storeName, setStoreName] = useState(""); 
    const [storeNumber, setStoreNumber] = useState(0);
    const [storeOpen, setStoreOpen] = useState("False");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [allStores, setAllStores] = useState([]); 
    const [createdNowStore, setCreatedNowStore] = useState({}); 
    

    
    
    
    //handler when the form is submitted
    const onSubmitHandler = e => {
        console.log("ssssssssssssssssssss")

        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        console.log("ssssssssssssssssssss")

        axios.post('http://localhost:8000/api/stores', {
            storeName,
            storeNumber,
            storeOpen
        })
            .then(res=>{
                
                navigate("/");
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                console.log(err)
            })
    }

    const handleChange = e => {
        if (e.target.checked) {
            setStoreOpen("True")
        } else {
            setStoreOpen("False")
        }
    };




    //onChange to update firstName and lastName
    return (
        <div>
        <Link to={"/" }>Go back home</Link>

        <h3>Add a new store!</h3>
            {errors.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)}
            {/* <p style={{ color: "red" }}>{nameError}</p> */}
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Store Name</label><br/>
                <input type="text" onChange={(e)=>setStoreName(e.target.value)} value={storeName}/><br/>
                <label>Store Number</label><br/>
                <input type="number" onChange={(e)=>setStoreNumber(e.target.value)} value={storeNumber}/><br/>
                <label>Open?</label><br/>
                <input type='checkbox' value={1}  onChange={handleChange} />
            </p>

            <input value={"Add a new Store"} type="submit"/>
            </form>
        </div>
    )
}

