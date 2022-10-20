
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import  {QuizContext} from "./Pages/Hook/Quiz"
import {useContext} from "react";
import QuizD from './Pages/QuizD';
import StartingDisplay from './Pages/StartingDisplay';
import Result from './Pages/Result';


function App() {
  const {start,score,exit} = useContext(QuizContext)
  return (
    <div className="App">
    <Navbar></Navbar>

   <>
   {
    exit === false
    ?
    <> 
    {
      start === true
      ?
      <QuizD/>
      :
      <StartingDisplay/>
     }
     </>
     :<Result score={score} />
     
   }
   
   </>


    </div>

  );
}

export default App;
