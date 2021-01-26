import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from "../../data/products.json"

function ProductDetail(props) {
    const params = useParams()
    const { productID } = params

    const product = products.results.filter(
        item => item.id === Number(productID)
    ).map(
        item =>
            <div className="card">
                <img src={item.src} width="300" height="400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                        {item.detail}
                    </p>
                    <Link className="btn btn-primary" to={`/urunler/${item.id}`}>Incele</Link>
                </div>
            </div>
    )

    return (
        <>
            <nav aria-label="breadcrumb" className="bg-success mt-3">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Ana Sayfa</Link></li>
                    <li className="breadcrumb-item"><Link to="/products">Arabalar</Link></li>
                    <li className="breadcrumb-item">Detay</li>
                </ol>
            </nav>
            {product}
        </>
    )
}

export default ProductDetail
