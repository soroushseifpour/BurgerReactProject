import classes from './MealList.module.css';
import React, { Fragment } from 'react'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
const MealList=(props)=>{
  const mealList=DUMMY_MEALS.map((item,index)=>{
    return(
      <MealItem
        key={props.id+`${index}`}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    )
  })
    return(
        <Fragment>
            <div className={classes['meal-list--container']}>
                <ul className={classes['meal-list']}>
                  {mealList}     
                </ul>
            </div>
        </Fragment>
    )
}
export default MealList