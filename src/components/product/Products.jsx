import React from 'react'
import products from '../../data/products.json'
import ProductCard from './ProductCard'
import Search from '../Search'

function Products(props) {
    const productItems = products.results.filter(item => item.isActive).map(
        (item) => (
            <div className="col-sm-6 mb-3"
                key={item.id}>
                <ProductCard
                    id={item.id}
                    title={item.title}
                    detail={item.detail}
                    imgsrc={item.src}
                />
            </div>
        )
    )
    return (
        <>
            <h1 className="text-center">Cars</h1>
            <Search />
            <hr />
            <div className="row">
                {productItems}
            </div>
        </>
    )
}

export default Products
