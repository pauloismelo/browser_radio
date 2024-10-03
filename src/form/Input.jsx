import styles from './Input.module.css'

function Input({text, name, type, placeholder, handleChange}) {
    return ( 
        
        <input className={styles.input_search} name={name} type={type} id={name} placeholder={placeholder} onChange={handleChange}/>
        
     );
}

export default Input;