import styles from './Sidebar.module.css'

function Sidebar_radios({id, name, radio, ChamaFav}) {

const remove=(e)=>{
    e.preventDefault()
    ChamaFav(radio)
}

    return ( 
        <div key={id} className={styles.div_radios} >
            <div className="col-10">{name}</div>
            <div className="col-2">
                    <button className="btn btn-success" onClick={remove}>Fav</button>
            </div>
            
        </div>
     );
}

export default Sidebar_radios;