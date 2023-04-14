import React, { useEffect,useState } from 'react';
import classes from './Dropdown.module.css';

const Dropdown = ({placeHolder, options}) => {

    const[showMenu ,setShowMenu] = useState(false);

    useEffect(()=>{
        const handler = () => setShowMenu(false);

        window.addEventListener("click" ,handler);
        return () =>{
            window.removeEventListener("click" , handler);
        };
    });

    
    const handlerInputClick = (e) =>{
        e.stopPropagation();
        setShowMenu(!showMenu);
    }
    const getDisplay = () =>{
        return placeHolder;
    }
  return (
    <div className={classes.container}>
        <div onClick={handlerInputClick} className={classes.input}>
            {
                showMenu && (
                     <div className={classes.menu}>
                {options.map((option)=>(
                    <div key={option.value} className={classes.item} >
                        {option.label}
                    </div>
                ))}
            </div>
                )
            }
           
        </div>
    </div>
  )
}

export default Dropdown;