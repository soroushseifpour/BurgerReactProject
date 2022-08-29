import classes from "./MealItem.module.css";
import React, { useContext, useRef, useState } from "react";
import MealsContex from "../../../../store/MealsContext";
const MealItem = (props) => {
  const contextMeal = useContext(MealsContex);
  const ref = useRef()
  const formHandler=(e)=>{
    e.preventDefault()
    const amount=ref.current.value
    const item={
      id:props.id,
      name:props.name,
      price:props.price,
      amount:+amount
    }
    contextMeal.addingItem(item)
  }
  return (
    <li className={classes["meal-item"]} key={props.id}>
      <div className={classes["meal-item--name"]}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.order}>
         <form onSubmit={formHandler}>
        <div className={classes.amount}>
          <h4>Amount : ${props.price}</h4>
          <input
            ref={ref}
            type="number"
            className={classes["amount-input--title"]}
            min="1"
            defaultValue="0"
          />
        </div>
        <div className={classes["button-order"]}>
            <button
              type="submit"
              className={classes["input-button"]}
            >
                ADD
                </button>
        </div>
        </form>
      </div>
    </li>
  );
};
export default MealItem;
