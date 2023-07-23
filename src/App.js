import "./App.css";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";


const App=()=> {
  let apiKey="af32d52396b14e78b9efb2df0a705cd1"
  // state={
  //   progress:0
  // }
  const[progress,setProgress]=useState(0)
  const setprogress=(progress)=>{
    setProgress(progress)
  
  }
  
    return (
      <div>
        
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route exact path="/" element={< News setprogress={setprogress} apiKey={apiKey} key='general' pagesize={8} country="in" category="general"/>}></Route>
          <Route exact path="/Business" element={ <News setprogress={setprogress} apiKey={apiKey} key='business'  pagesize={8} country="in" category="business"/>}></Route>
          <Route exact path="/Entertainment" element={<News setprogress={setprogress} apiKey={apiKey} key='entertainment'  pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route exact path="/General" element={ <News setprogress={setprogress} apiKey={apiKey} key='general'  pagesize={8} country="in" category="general"/>}></Route>
          <Route exact path="/Health" element={ <News setprogress={setprogress} apiKey={apiKey} key='health'  pagesize={8} country="in" category="health"/>}></Route>
          <Route exact path="/Science" element={ <News setprogress={setprogress} apiKey={apiKey} key='science'  pagesize={8} country="in" category="science"/>}></Route>
          <Route exact path="/Sports" element={ <News setprogress={setprogress}  apiKey={apiKey} key='sports'  pagesize={8} country="in" category="sports"/>}></Route>
          <Route exact path="/Technology" element={ <News setprogress={setprogress}  apiKey={apiKey} key='technology' pagesize={8} country="in" category="technology"/>}></Route>

        </Routes>
        </Router>
      </div>
      
      
    )
    
  
}
export default App