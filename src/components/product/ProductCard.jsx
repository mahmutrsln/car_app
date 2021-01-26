import React from 'react'
import { Link } from 'react-router-dom'
function ProductCard(props) {
    return (
        <div className="card">
            <img src={props.imgsrc} width="300" height="200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.detail}
                </p>
                <Link className="btn btn-primary" to={`/urunler/${props.id}`}>Incele</Link>
            </div>
        </div>
    )
}
//İçinde eğer title ya da detail bilgisi yoksa default bir şekilde ver dedik.
ProductCard.defaultProps = {
    title: "lorem",
    detail: "detail bilgisi"
}

export default ProductCard