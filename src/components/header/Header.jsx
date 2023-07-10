/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
import {BsGithub} from 'react-icons/bs';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark mt-3 shadow-sm rounded">
                <div className="container-sm">
                    <a className="navbar-brand">
                        <img src="https://icon-library.com/images/bitcoin-icon-png/bitcoin-icon-png-21.jpg" width="35" height="35" />
                        <span className="navbar-brand-name">
                            Koinix
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link">|  Providing a fundamental analysis of the crypto market</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <a href="https://github.com/fifolio/Koinix" target="_blank" style={{fontWeight: '500'}} className="btn btn-outline-light text-bold " type="submit"><BsGithub className='react-icon'/> Github Repository</a>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}