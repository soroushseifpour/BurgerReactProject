import classes from "./Modal.module.css";
import React, { Fragment, useContext } from "react";
import ReactDOM from 'react-dom'
import MealsContex from "../../store/MealsContext";


const Backdrop=(props)=>{
    return(
        <div className={classes.backdrop} onClick={props.onClick}>
        </div>
    )
}

const ModalOverlay=(props)=>{
    const context = useContext(MealsContex)
    const {items}=context
    const addingItem=(item)=>{
        context.addingItem(item)
    }
    const removingItem=(id)=>{
        context.removingItem(id)
    }
    const summaryItems=items.map(item=>{
        return(
            <li className={classes['itemlist-summary--item']} key={item.id}>
                <div className={classes['item-name']}>
                    <p>{item.name} : {item.amount}</p>
                </div>
                <div className={classes['item-button']}>
                    <button onClick={addingItem.bind(null,item)} className={classes.btnAdd}>X2</button>
                    <button onClick={removingItem.bind(null,item.id)} className={classes.btnRemove}>-</button>
                </div>
            </li>
        )
    })
    return (
        <Fragment>
          <div className={classes.card}>
                <ul className={classes['itemlist-summary']}>
                    {summaryItems}
                </ul>
            <button>ORDER</button>
          </div>
        </Fragment>
      );
}

const Modal = (props) => {   
  const portalModal=document.getElementById('backdrop')
  return(
      <Fragment>
          {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,portalModal)}
          {ReactDOM.createPortal(<ModalOverlay/>,portalModal)}
      </Fragment>
  )
};
export default Modal;
