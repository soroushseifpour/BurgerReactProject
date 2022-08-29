import { Fragment, useContext, useEffect, useState } from 'react';
import  './App.css'
import Header from './components/Layout/Header'
import Meal from './components/Meals/Meal';
import Modal from './components/UI/Modal';
import MealsContex from './store/MealsContext';
import MealsContexProvider from './store/MealsContextProvider';
function App() {
  const [isModalAvailable, setIsModalAvailable] = useState(false)
  const modalHandler=()=>{
      setIsModalAvailable((prevState)=>!prevState)
  }
  return (
    <MealsContexProvider>
        {isModalAvailable && <Modal onClick={modalHandler}/>}
        <Header onClick={modalHandler}/>
        <Meal/>
    </MealsContexProvider>
  );
}

export default App;
