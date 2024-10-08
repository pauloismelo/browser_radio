import { useEffect, useState } from "react";

import Input from "../form/Input";
import styles from './Sidebar.module.css'
import { Link } from "react-router-dom";
import Sidebar_radios from "./Sidebar_radios";

function Sidebar({radios}) {
    console.log('radio em sidebar', radios);
    
    
    const [radio, setRadio] = useState(radios);
    const [search, setSearch] = useState();
    const [fav, setFav] = useState();

    
    
    function Change(e){
        setSearch({...search,[e.target.name] : e.target.value}); 

        const search_update = radio.filter(
        (valor) => valor.name.includes(e.target.value)
        )
        if (search)
            setRadio(search_update);
        else
            setRadio(radio)
    }

    function ChamaFav(x){
        if (localStorage.getItem("fav")!=undefined){
            var array_fav = [localStorage.getItem("fav")];
        }else{
            var array_fav = [];
        }
        
        
       // array_fav.push(localStorage.getItem("fav"));
        array_fav.push(x.changeuuid)
        localStorage.setItem("fav", array_fav)
        //localStorage.setItem("city", x.city)
    }


    return (
        <>
        <div className="text-center">
        <h2>Menu</h2>
            <Input type="text" name="search" text="Search here" placeholder="Search here" handleChange={Change}/>
        </div>
        <div className="mt-4 text-center">
            {radio.length>0 &&
                              
                radio.map((valor)=>(
                   <Sidebar_radios key={valor.changeuuid} name={valor.name} radio={valor}  ChamaFav={ChamaFav} />
                    
                ))
            }
        </div>
        </>
     );
}

export default Sidebar;