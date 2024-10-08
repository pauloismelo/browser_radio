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
  const [viewdiv, setViewdiv] = useState(false);
  

  async function getData(){
    let response = await axios(`https://de1.api.radio-browser.info/json/stations/search?limit=10`);
    setRadio(response.data);
  }

  useEffect(()=>{
    if (fav.length>0){
      
      setViewdiv(false);
    }else{
      getData(); 
    }
  },[viewdiv]);

  
  
  

  
  
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

  //vou usar usestate no lugar de localstorage

  function ChamaFav(x){ //put Favorite radio

    let list_fav=[];
    let encontrou='';
    
    if (fav.length>0){
      list_fav=fav;
    }
    for (let k=0; k<list_fav.length;k++){
      if (list_fav[k]==x.changeuuid){
        //console.log('encontrou');
        encontrou='s';
      }
    }
    if (encontrou!=='s'){
      list_fav.push(x.changeuuid);
    }
    
    
    setFav(list_fav);
    setViewdiv(true);
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
                  {typeof fav!==null &&
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
