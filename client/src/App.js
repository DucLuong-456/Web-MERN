import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { DataProvider } from './GlobalState';
import Header from './components/headers/Header';
import Pages from './components/mainpages/Pages';
// App.js
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "ARB161wuixCpaGloqlppZGjp-nsRHDoUL1Ve4Y0FCIjfnNpsqxwi1o0t_PXODSErXerggm0cKvm5Z-_9",
  currency: "USD",
  intent: "capture",
 };
function App() {
  
  return (
    <DataProvider>
      {/* new payment  */}
    <PayPalScriptProvider options={{"clientId" : "ARB161wuixCpaGloqlppZGjp-nsRHDoUL1Ve4Y0FCIjfnNpsqxwi1o0t_PXODSErXerggm0cKvm5Z-_9"}}>
      <Router>
      <div className="App">
        <Header/>
        <Pages/>
      </div>
    </Router> 
    
     {/* <PayPalButtons style={{ layout: "horizontal" }} /> */}
    </PayPalScriptProvider>
    </DataProvider>

  );
}

export default App;
