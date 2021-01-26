import React, { useRef, useState, useEffect } from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import products from '../data/products.json'

function Search(props) {
    const location = useLocation()
    const history = useHistory()
    // Burda yapmak istediğimiz bir urlden veri çekmek
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    // const [inputValue, setInputValue] = useState(q ? q : "")
    const inputValue = useRef()
    const [searchResult, setSearchResult] = useState([])

    useEffect(
        () => {
            if (q) {
                inputValue.current.value = q

                const productResults = products.results.filter(
                    item => item.title.toLowerCase().includes(q.toLowerCase())
                ).map(
                    item => <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.src} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.detail}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )

                setSearchResult(productResults)
            }
        }, [q]
    )

    function handleForm(event) {
        event.preventDefault()
        history.push(`/ara?q=${inputValue.current.value}`)
    }
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="form-group">
                    <label htmlFor="search"> Araba Arama </label>
                    <input
                        name="q"
                        type="text"
                        className="form-control"
                        id="search"
                        placeholder="araba ara"
                        ref={inputValue} />

                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-block mt-2"
                        onClick={handleForm}>Ara</button>
                </div>
            </form>
            <hr />
            <Row>
                <Col sm={12}>
                    {searchResult}
                </Col>
            </Row>
        </>
    )
}

export default Search
