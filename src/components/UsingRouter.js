import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export const UsingRouter = () => {
    return (
        <>
            <nav style={{
                borderBottom: '1px solid',
                paddingBottom: '1rem',
            }}>
                <Link to="/invoices">Invoices</Link> | {" "}
                <Link to="/expenses">Expenses</Link>

            </nav>
            <Outlet/>
        </>
    )
}
