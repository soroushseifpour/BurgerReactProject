import React, { Fragment, useContext, useEffect, useState } from 'react'
import MealsContex from '../../store/MealsContext'
import classes from './Button.module.css'
const Button=(props)=>{
    const context = useContext(MealsContex)
    const [highlight, setHighlight] = useState(false)
    const {items}=context
    useEffect(() => {
        if(items.length ===0)
        return;
        setHighlight(true)
        const highlightTimer=setTimeout(()=>{
            setHighlight(false)
        },300)
        return ()=>{
            clearTimeout(highlightTimer)
        }
    }, [items])
    const btnClasses=`${classes.button} ${highlight ? classes.highlight : ''}`
    return(
        <Fragment>
            <button className={btnClasses} disabled={items.length >=1 ? false : true} onClick={props.onClick}>
                <span className={classes.title}>
                    <p>Order</p>
                </span>
                <span className={classes.badge}>
                    <p>{context.amount}</p>
                </span>
            </button>
        </Fragment>
    )
}
export default Button