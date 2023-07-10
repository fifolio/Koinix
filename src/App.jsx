/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from './components/coin/Coin';
import Header from './components/header/Header';
import Figure from './components/figure/Figure';
import Carousel from './components/carousel/Carousel';


export default function App(){

    return (
      <div className='main-container container-sm'>
      <Header />
      <Figure />
      <Carousel />
      <Coin />
      </div>
    )
}