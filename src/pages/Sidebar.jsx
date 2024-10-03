import { useEffect, useState } from "react";
import axios from "axios";
import Input from "../form/Input";
import styles from './Sidebar.module.css'

function Sidebar() {
    const [radio, setRadio] = useState('');
    const [search, setSearch] = useState();
    

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


useEffect(()=>{
    axios.get(`https://de1.api.radio-browser.info/json/stations/search?limit=10`)
    .then((response)=>{
        setRadio(response.data);
        }
    ).catch(err => console.log(err))
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
                
                <div key={valor.changeuuid} className={styles.div_radios}>{valor.name}</div>
                
            ))
            }
        </div>
        </>
     );
}

export default Sidebar;