import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error Loading Products", err);
                setLoading(false);
            });
    }, []);

    if (loading) 
        return <div className="loader">Loading Scent Aura...</div>

    return (
        <div className="container">
            <header className="hero">
                <h1>Welcome to Scent Aura</h1>
                <p>Discover your signature fragrance from our premium collection.</p>
            </header>

            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product._id}>
                        <div className="product-image">
                            <img src={product.thumbnail} alt={product.name} />
                        </div>
                        
                        <div className="card-info">
                            <h3>{product.name}</h3>
                            <p className="description">{product.description}</p>
                            <p className="price">₹{product.price}</p>
                            
                            <Link to={`/product/${product._id}`} className="btn">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home