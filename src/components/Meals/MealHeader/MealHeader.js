import React, { Fragment } from 'react'
import classes from './MealHeader.module.css'
const MealHeader=(props)=>{
    return(
        <Fragment>
            <div className={classes['meal-header']}>
                <div className={classes['meal-header--title']}>
                    <h3>Our meals</h3>
                </div>
            </div>
        </Fragment>
    )
}
export default MealHeader