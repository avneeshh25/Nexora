import React from 'react'
import Navbar from './Navbar.jsx';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout;