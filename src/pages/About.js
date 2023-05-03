import React from "react"
import { Link } from "react-router-dom";

export default function About(){
    return (
    <div className="Container">
      <h1>Vähän meistä:</h1>
      <label>Playlist on pieni pelejä, konsoleita ja muita vastaavia tuotteita myyvä kauppa.</label>
      <p>Tällä hetkellä fyysisiä kauppoja ei ole, joten kaikkien tuotteiden ostaminen, tilaaminen ja palauttaminen tapahtuu internetin välityksellä.</p>
      <p>Varastot ovat Helsingissä, Oulussa, Tampereella ja Rovaniemellä, elikkä tuotteiden kuljetus ympäri Suomea on mahdollista ja onnistuu nopeasti.</p>
    </div>
    );
}