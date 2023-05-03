import React from "react"
import { Link } from "react-router-dom";

export default function ContactUs(){
    return (
    <div className="Container">
      <h1>Tässä on meidän yhteystietomme:</h1>
      <label>Sähköposti: customersupport@playlist.com</label><br></br>
      <label>Puhelin (arkisin 12-12.15): +358 40 567890123</label>
    </div>
    );
}