import classes from "./Meal.module.css";
import React, { Fragment } from "react";
import MealHeader from "./MealHeader/MealHeader";
import MealList from "./MealList/MealList";

const Meal = (props) => {
  return (
    <div className={classes['meal-summary']}>
      <div className={classes.card}>
      <MealHeader />
      <MealList />
      </div>
    </div>
  );
};
export default Meal;
