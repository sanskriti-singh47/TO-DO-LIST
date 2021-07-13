import React from 'react'
import './css/footer.css'

export const Footer = () => {
    let footerStyle = {
        position:"relative",
        width: "100%",
        top: "12vh",
    }

    return (
        <>
        <footer className="footer py-2" style={footerStyle}> 
        <p className="text-center">Copyright &copy; TheTodosList.com ...</p>
        </footer>
        </>
    )
}
