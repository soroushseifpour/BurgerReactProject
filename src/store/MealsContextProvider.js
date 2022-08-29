import React, { useReducer } from 'react'
import MealsContex from './MealsContext'

const defaultItem={
    items:[],
    price:0,
    amount:0
}
const itemReducer=(state,action)=>{
    if(action.type==="ADDING_ITEM"){
        const updatedItem={...action.value}
        const updatedItems=[...state.items]
        let price=state.price+updatedItem.amount*updatedItem.price
        let amount=state.amount+ +updatedItem.amount
        const isExistedIndex=updatedItems.findIndex(it=>it.id===updatedItem.id)
        if(+isExistedIndex !== -1){
            const existedItem={...updatedItems[isExistedIndex]}
            existedItem.amount=existedItem.amount+updatedItem.amount
            updatedItems[isExistedIndex]=existedItem
        }
        else{
            updatedItems.push(updatedItem)
        }
        console.log(updatedItems)
        return{
            items:updatedItems,
            price:price,
            amount:amount
        }
    }
    else if(action.type==="REMOVING_ITEM"){
        let updatedItems=[...state.items]
        const updatedItem=updatedItems.find(item=>item.id===action.value)
        if(updatedItem.amount ===1){
            updatedItems=updatedItems.filter(item=>item.id !== action.value)
        }
        updatedItem.amount=updatedItem.amount-1;
        let price=state.price-updatedItem.price
        let amount=state.amount-1;
        updatedItems[action.value]=updatedItem
        return{
            items:updatedItems,
            price:price,
            amount:amount
        }
    }
    else{
        return defaultItem
    }
}
const MealsContexProvider=(props)=>{
    const [stateItem, dispatchItem] = useReducer(itemReducer,defaultItem)
    const addingItemHandler=(item)=>{
        dispatchItem({type:"ADDING_ITEM",value:item})
    }
    const removingHandler=(id)=>{
        dispatchItem({type:"REMOVING_ITEM",value:id})
    }
    return(
    <MealsContex.Provider value={{
        addingItem:addingItemHandler,
        items:stateItem.items,
        amount:stateItem.amount,
        removingItem:removingHandler
    }}>
        {props.children}
    </MealsContex.Provider>
    )
}
export default MealsContexProvider