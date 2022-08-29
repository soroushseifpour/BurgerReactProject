import React, { Fragment, useContext } from 'react'
import MealsContex from '../../store/MealsContext'
import Button from '../UI/Button'
import classes from './Header.module.css'
const Header=(props)=>{
    return(
        <Fragment>
            <div className={classes.header}>
                <div className={classes['restaurant-brand']}>Restaurant</div>
                <nav className={classes.navbar}>
                    <ul className={classes['navbar-list']}>
                        <Button
                        onClick={props.onClick}
                        />
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}
export default Header