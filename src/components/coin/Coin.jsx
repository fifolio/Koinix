/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from 'react';

export default function Coin() {

    const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('');


    const FetchData = () => {
        axios.get(api)
            .then(res => {
                setCoins(res.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        FetchData()
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()));

    if (loading) {
        return (
            <div className="d-flex justify-content-center" style={{ marginTop: '150px' }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else {

        return (
            <div className="mt-4">

                <input className="text-white text-center bg-dark border-0 shadow-sm rounded" type="text" placeholder="🔍 Search for a specific coin" style={{ width: '100%', height: '45px', outline: 'none', fontWeight: 'bold' }} onChange={handleChange} />

                <div className="mt-4">
                    <table className="table table-dark table-hover rounded">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Symbol</th>
                                <th scope="col" className="d-none d-md-table-cell">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">% Change</th>
                                <th scope="col" className="d-none d-md-table-cell">Volume</th>
                                <th scope="col" className="d-none d-md-table-cell">Mkt. Cap</th>
                            </tr>
                        </thead>

                        {filteredCoins?.map((coin, index) => {
                            return (
                                <tbody key={index} style={{background: '#212529'}}>
                                    <tr>
                                        <th scope="row">
                                        </th>
                                        <td className="text-uppercase d-flex">
                                            <img src={coin.image} width={30} style={{ marginRight: '13px' }} />
                                            {coin.symbol}
                                        </td>
                                        <td className="text-capitalize d-none d-md-table-cell">{coin.name}</td>
                                        <td>${coin.current_price.toLocaleString()}</td>

                                        {coin.price_change_percentage_24h > 0 ? (
                                            <td style={{ color: 'lightgreen' }}>{coin.price_change_percentage_24h.toFixed(2)}</td>
                                        ) : (
                                            <td style={{ color: 'red' }}>{coin.price_change_percentage_24h.toFixed(2)}</td>
                                        )}

                                        <td className="d-none d-md-table-cell">${coin.total_volume.toLocaleString()}</td>
                                        <td className="d-none d-md-table-cell">${coin.market_cap.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
        )
    }
}
