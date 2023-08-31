import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';
import {
    Routes,
    Route,
    Link 
  } from "react-router-dom"; 
    
const StoreUpdate = (props) => {
    const [storeName, setStoreName] = useState(""); 
    const [storeNumber, setStoreNumber] = useState(0);
    const [storeOpen, setStoreOpen] = useState("False");
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 


    useEffect(() => {
        axios.get('http://localhost:8000/api/stores/' + id)
            .then(res => {
                setStoreName(res.data.storeName);
                setStoreNumber(res.data.storeNumber);
                setStoreOpen(res.data.storeOpen);

                
            })
    }, []);

    const updateStore = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/stores/' + id, {
            storeName,storeNumber,storeOpen
        })
            .then(res => navigate("/stores/" + id))
                .catch(err=>{
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
                }) 
    }
    const handleChange = e => {
        if (e.target.checked) {
            setStoreOpen("True")
        } else {
            setStoreOpen("False")
        }
    };



    return (
        <div>
        <Link to={"/" }>Go back home</Link>
            <h2>Edit this store!</h2>
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <form onSubmit={updateStore}>
                <p>
                    <label>Store Name</label><br />
                    <input type="text" 
                    name="storeName" 
                    value={storeName} 
                    onChange={(e) => { setStoreName(e.target.value) }} />
                </p>
                <p>
                    <label>Store Number</label><br />
                    <input type="number" 
                    name="storeNumber" 
                    value={storeNumber} 
                    onChange={(e) => { setStoreNumber(e.target.value) }} />
                </p>
                
                {
                storeOpen== "False" ?
                    <p>
                    <label>Open?</label><br/>
                <input type='checkbox'  onChange={handleChange} />
                    </p>
                    :
                    <p>
                    <label>Open?</label><br/>
                    <input type='checkbox'  onChange={handleChange} checked />
                    </p>
              }





                <input value={"Edit Store"} type="submit"/>
            </form>

        </div>
    )
}
    
export default StoreUpdate;