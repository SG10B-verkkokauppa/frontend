import React from "react";
import { Link, useParams } from "react-router-dom";
import Konsolit from "./Konsolit";
import Lautapelit from "./Lautapelit";
import Oheistuotteet from "./Oheistuotteet";
import Pelit from "./Pelit";

export default function Tuotteet() {
    const { id } = useParams();
    return (
        <div className="Container">
            {id == 1
                ? <Konsolit categoryid = {id}  />
                : <></>
            }
            {id == 2
                ? <Pelit categoryid = {id} />
                : <></>
            }
            {id == 3
                ? <Lautapelit categoryid = {id} />
                : <></>
            }
            {id == 4
                ? <Oheistuotteet categoryid = {id} />
                : <></>
            }
        </div>
    );
}