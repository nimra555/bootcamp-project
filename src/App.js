import React from 'react';
import './App.css'; 
import Header from './Component/Header'; 
import Main from './Component/main'; 
import Footer from './Component/footer'; 


function App() {
  return(
    <div>
     <Header />
     <Main />
     <Footer name={'nimra'}/>
    </div>
  );
}

export default App;
