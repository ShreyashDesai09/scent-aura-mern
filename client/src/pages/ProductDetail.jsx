import React from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const [userName, setUserName] = useState('')
    const [rating, setRating] = useState(5)
    const [comment, setComment] = useState('')
  
    useEffect(() => {
        window.scrollTo(0, 0); 
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error Loading Product Details", err);
                setLoading(false);
            });
    }, [id]);

    const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
        const reviewObj = { 
            user: userName, 
            rating: rating, 
            comment: comment 
        };
        
        await axios.post(`http://localhost:5000/products/${id}/reviews`, reviewObj);

        setProduct(prev => ({
            ...prev,
            reviews: [...prev.reviews, reviewObj]
        }));

        alert("Review submitted!");
        setUserName('');
        setComment('');
    } catch (err) {
        console.error(err);
        alert("Failed to submit. Check if backend is running.");
    }
};

    if (loading) return <div className="loader">Unveiling The Scent...</div>
    if (!product) return <div className="container">Product not found. <Link to="/">Return Home</Link></div>
    
    return (
        <div className="product-detail-container">
            <div className="main-info">
                <div className="gallery">
                    <img src={product.thumbnail} alt={product.name} className="main-img" />
                    
                    <div className="thumb-grid">
                        {product.images && product.images.map((img, index) => (
                            <img key={index} src={img} alt={`${product.name} view ${index}`} />
                        ))}
                    </div>
                </div>

                <div className="details">
                    <Link to="/" className="back-link">← Back to Products</Link>
                    <h1>{product.name}</h1>
                    <p className="price-tag">₹{product.price}</p>
                    <p className="full-description">{product.fullDescription}</p>

                    <div className="product-meta">
                        <strong>Available Sizes:</strong>
                        <p>{product.sizes && product.sizes.join(' | ')}</p>
                    </div>
                </div>        
            </div>

            <hr className="divider" />

            <section className="reviews-section">
                <h2>Customer Experiences</h2>

                <div className="review-list">
                    {product.reviews && product.reviews.length > 0 ? (
                        product.reviews.map((rev, index) => (
                            <div key={index} className="review-card">
                                <strong>{rev.user}</strong>
                                <span className="stars">
                                    {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                                </span>
                                <p>{rev.comment}</p>
                            </div>
                        )) 
                    ) : (   
                        <p>No reviews yet for {product.name}. Be the first to share your experience!</p>
                    )}
                </div>

                <form className="review-form" onSubmit={handleReviewSubmit}>
                    <h3>Share Your Thoughts</h3>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required 
                    />
                    <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                        <option value="5">5 Stars - Excellent</option>
                        <option value="4">4 Stars - Very Good</option>
                        <option value="3">3 Stars - Good</option>
                        <option value="2">2 Stars - Fair</option>
                        <option value="1">1 Star - Poor</option>
                    </select>
                    <textarea 
                        placeholder="Write your review here..." 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn">Submit Review</button>
                </form>
            </section>
        </div>
    )
}

export default ProductDetail;