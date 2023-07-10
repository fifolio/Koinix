/* eslint-disable react/jsx-no-target-blank */
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Carousel() {

    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const api = 'https://api.coingecko.com/api/v3/news';
    const FetchData = () => {
        setLoading(true)

        axios.get(api)
            .then(res => {
                setRes(res.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error)
            })
    }

    useEffect(() => {
        FetchData()
    }, [])


    console.log(res.data)

    if (loading) {
        return (
            <div className="d-flex justify-content-center" style={{marginTop: '150px'}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else if (error) {
        console.log(error)
    } else {

        return (
            <div id="carouselExampleCaptions" className="carousel slide shadow">
                <div className="carousel-inner rounded">

                    {res.data?.map((news, index) => {
                        return (
                            <div key={index} className={`${index === 0 ? 'carousel-item active' : 'carousel-item'}`}>
                                <img src={news.thumb_2x} className="d-block w-100 img-fluid" style={{ minWidth: '100%', minHeight: '400px', maxHeight: '400px', objectFit: 'cover' }} />
                                <div className="carousel-caption">
                                    <a href={news.url} target="_blank">
                                        <h5>{news.title}</h5>
                                        <p>{news.description.length > 100 ? news.description.slice(0, 100) + '...' : news.description}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}