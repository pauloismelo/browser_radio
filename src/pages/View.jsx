import { useEffect, useState } from "react";
import View_radios from "./View_radios";

function View() {
   const [favoritas, setFavoritas]= useState([]);


    useEffect(()=>{
        setFavoritas(localStorage.getItem("fav"));
        console.log(favoritas)
    },[])
   
   
    return ( 
    <div className="text-center">
        <h2>Radio Browser</h2>
        <div className="row">
            <div className="col-6 text-white">Favorite Radios</div>
            <div className="col-6 text-white"><i className="fa fa-search"></i> Search stations</div>
        </div>

        <div>
            {favoritas>0 &&
                favoritas.map((favorita)=>(
                    <View_radios name={favorita.name} city="" radio={favorita} state=""/>
                ))

            }
        </div>

    </div> );
}

export default View;