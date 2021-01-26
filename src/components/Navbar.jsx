import React from 'react'
import { Link } from 'react-router-dom'

function Navbarr(props){
    const linkItems = props.links.filter(item=> item.isLink ).map((item,index) =>
        (
            <li key={index}>
                <Link to = {item.link} className = "nav-link">
                {item.title}
                </Link>
            </li>
        )
    )
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
            <Link to = "/" className="navbar-brand">Cars</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                        {linkItems}
                </div>
            </div>
        </nav>
    )
}

export default Navbarr