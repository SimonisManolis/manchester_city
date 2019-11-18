import React from 'react';
import Header from '../Components/Header_Footer/header';
import Footer from '../Components/Header_Footer/footer';

const Layout = (props) =>{
    return(
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
} 

export default Layout;