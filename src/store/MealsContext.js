import { createContext } from "react";


const MealsContex=createContext({
    items:[],
    amount:0,
    addingItem:(item)=>{},
    removingItem:(id)=>{}
})
export default MealsContex