import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

    
  
const StoreList = () => {
    const [stores, setStores] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/stores')
            .then(res=>{
                setStores(res.data);
            })
            .catch(err => console.error(err));
    },[stores]);


    const deleteStore = (personId) => {
        axios.delete('http://localhost:8000/api/stores/' + personId)
            .then(res => {
                console.log("Deleted succefully")
            })
            .catch(err => console.error(err));
    }

    return (

        <div>
            <h3> Find Stores in your area!</h3>

            <table>
                <tbody>

                <tr>
                    <th>Store</th>
                    <th>Store Number</th>
                    <th>Open</th>
                    <th>Remove</th>
                </tr>
            {stores.map( (store, i) =>
            <tr key={i}>
                <td ><Link to={"/stores/" + store._id }>{store.storeName}</Link></td>
                <td >{store.storeNumber}</td>
                <td >{store.storeOpen}</td>
                {store.storeOpen== "True" ?
                <td>
                    <button onClick={(e)=>{deleteStore(store._id)}}>Delete</button> 
                    
                </td>
                :
                    <td>
                    </td>
                }



            </tr>
                
                )}
                </tbody>

                </table>
                <br/><br/>
                <button>

                <Link to={"/stores/add" }>Can't find your store?</Link>
                </button>







        </div>
    )
}
    
export default StoreList;