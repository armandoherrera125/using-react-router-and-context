import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Expenses } from './components/Expenses';
// import { Invoice } from './components/Invoice';
// import { Invoices } from './components/Invoices';
// import { UsingRouter } from './components/UsingRouter';
import { AppRouter } from './useContext/AppRouter';
// import { MainApp } from './useContext/MainApp';
// import {Invoices} from './components/Invoices';
// import {Expenses} from './components/Expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<UsingRouter />} >
  //       <Route path="/invoices" element={<Invoices />} >  
  //         <Route
  //           index
  //           element={
  //             <main style={{ padding: "1rem" }}>
  //               <p>Select an invoice</p>
  //             </main>
  //           }
  //         />
  //         <Route path=":invoiceId" element={<Invoice />} />
  //       </Route>

  //       <Route path="/expenses" element={<Expenses />} />
  //     </Route>

  //     <Route path="*" element={<main style={{ padding: "1rem" }}>
  //       <h1>There is nothing here!</h1>
  //     </main>} />

  //   </Routes>

  // </BrowserRouter>
);

