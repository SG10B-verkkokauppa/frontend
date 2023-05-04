import React, { useState } from "react"
import { Link } from "react-router-dom";

export default function Order(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    
    function order(e) {
        e.preventDefault();}

    return (
        <>
        <h3 className="header">Client information</h3>
        <form onSubmit={order}>
          <div className="form-group">
            <label>First name:</label>
            <input className="form-control" onChange={e => setFirstname(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Last name:</label>
            <input className="form-control" onChange={e => setLastname(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input className="form-control" onChange={e => setAddress(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Postal code</label>
            <input className="form-control" onChange={e => setZip(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>City</label>
            <input className="form-control" onChange={e => setCity(e.target.value)}/>
          </div>
          <div className="buttons">
            <button className="btn btn-primary">Order</button>
          </div>
        </form>
    </>
    );
}


        