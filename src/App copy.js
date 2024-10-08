import { useEffect, useState } from 'react';
import styles from './App.css'
import axios from 'axios';
import Sidebar_radios from "./pages/Sidebar_radios";
import View_radios from "./pages/View_radios";
import Input from "./form/Input";

function App() {

  const [radio, setRadio] = useState([]);
  const [search, setSearch] = useState();
  const [fav, setFav] = useState([]);
  

  async function getData(){
    let response = await axios(`https://de1.api.radio-browser.info/json/stations/search?limit=10`);
    setRadio(response.data)
  }

  function DataFav(array_fav, radio){
    const array = array_fav.split(',');
    if (array == null) return;

    for (let x=0; x<array.length; x++){
      var show_fav=radio.filter((valor)=>(valor.changeuuid===array[x]))
    }
    //pensar uma forma de filtrar um array atraves de outro array
    console.log('=====Show: ',show_fav)
    return setFav(show_fav)
    
  }

  
  useEffect(()=>{
    getData(); 

    if (typeof radio!=undefined){
        DataFav(localStorage.getItem("fav"),radio)
    }
    
  },[])
  
  
  function Change(e){ // Search Radio
      setSearch({...search,[e.target.name] : e.target.value}); 

      const search_update = radio.filter(
      (valor) => valor.name.includes(e.target.value)
      )
      if (search)
          setRadio(search_update);
      else
          setRadio(radio)
  }

  

  function ChamaFav(x){ //put Favorite radio
    //console.log('retorno:', localStorage.getItem("fav"))
      if (localStorage.getItem("fav")!==null){
          var array_fav = [localStorage.getItem("fav")];
          array_fav.push(x.changeuuid)
      }else{
        var array_fav = [x.changeuuid];
        //array_fav.push(x)
      }
     
      
      localStorage.setItem("fav", array_fav)

      DataFav(localStorage.getItem("fav"),radio)
  }

  
  return (
    <div className="App">
      <div className="row">
          <div className="col-4 text-center" id='bar'>
              
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
          </div>
          <div className="col-8 text-center">
            
              <h2>Radio Browser</h2>
              <div className="row">
                  <div className="col-6 text-white">Favorite Radios</div>
                  <div className="col-6 text-white"><i className="fa fa-search"></i> Search stations</div>
              </div>

              <div>
                  { fav.length>0 &&
                      fav.map((valor)=>(
                          
                          <View_radios key={valor} name={valor} city="" radio={valor} state=""/>
                      ))
                  }
              </div>

            
          </div>
      </div>
    </div>
  );
}

export default App;
