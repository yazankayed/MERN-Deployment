import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
    
const StoreDetails = (props) => {
    const [store, setStore] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/stores/' +id)
            .then(res => setStore(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <Link to={"/" }>Go back home</Link>
            <h2>{store.storeName}</h2>
            <h2>Store Number: {store.storeNumber}</h2>
            <h2>{store.storeOpen}</h2>

            <Link to={"/stores/edit/"+store._id }>Edit Store Details</Link>

        </div>
    )
}
    
export default StoreDetails;

