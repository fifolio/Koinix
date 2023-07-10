/* eslint-disable react/jsx-no-target-blank */
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className="footer my-5 bg-dark rounded py-3 text-center" style={{ width: '100%', color: 'lightgray', fontSize: '14px'}}>
            <div className="media mb-2" style={{fontSize: '20px'}}>
                <a href="https://www.linkedin.com/in/fifolio/" target='_blank'><FaLinkedinIn /></a>
                <a href="https://github.com/fifolio/Koinix" target='_blank' className='mx-3'><FaGithubAlt /></a>
            </div>
            Made with ❤ by <a href="https://github.com/fifolio" target='_blank'>fifolio</a> &copy; {new Date().getFullYear()}
        </div>
    )
}