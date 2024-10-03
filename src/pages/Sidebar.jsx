import { useEffect, useState } from "react";
import axios from "axios";
import Input from "../form/Input";
import styles from './Sidebar.module.css'
import { Link } from "react-router-dom";
import Sidebar_radios from "./Sidebar_radios";

function Sidebar() {
    const [radio, setRadio] = useState('');
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
        localStorage.setItem("fav", x)
    }


    useEffect(()=>{
        axios.get(`https://de1.api.radio-browser.info/json/stations/search?limit=10`)
        .then((response)=>{
            setRadio(response.data);
            }
        ).catch(err => console.log(err))

        //const favoritas=localStorage.getItem("fav")
    },[])

    return (
        <>
        <div className="text-center">
        <h2>Menu</h2>
            <Input type="text" name="search" text="Search here" placeholder="Search here" handleChange={Change}/>
        </div>
        <div className="mt-4 text-center">
            {radio.length>0 &&
                              
            radio.map((valor)=>(
                
                <Sidebar_radios id={valor.changeuuid} name={valor.name} radio={valor}  ChamaFav={ChamaFav} />
                
                
            ))
            }
        </div>
        </>
     );
}

export default Sidebar;