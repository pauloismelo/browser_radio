import { useEffect, useState } from "react";
import View_radios from "./View_radios";
import axios from "axios";

function View({radio}) {
   const [favoritas, setFavoritas]= useState([]);


    useEffect(()=>{

        

        setFavoritas(localStorage.getItem("fav"));
        console.log('Pegar favoritas', favoritas.name)
        
    },[favoritas])
   
    return ( 
    <div className="text-center">
        <h2>Radio Browser</h2>
        <div className="row">
            <div className="col-6 text-white">Favorite Radios</div>
            <div className="col-6 text-white"><i className="fa fa-search"></i> Search stations</div>
        </div>

        <div>
            { radio.length>0 &&
                radio.map((valor)=>(
                    
                    <View_radios name={valor} city="" radio={valor} state=""/>
                ))

            }
        </div>

    </div> );
}

export default View;