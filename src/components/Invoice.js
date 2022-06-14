import React from 'react';
import { useParams } from 'react-router-dom';
import { getInvoice } from './Data';

export const Invoice = () => {
    const {invoiceId} = useParams();
    const {amount, name , number, due} = getInvoice(parseInt(invoiceId, 10));
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Total Due: {amount}</h2>
        <p>
          {name}: {number}
        </p>
        <p>Due Date: {due}</p>
      </main>
    );
}
