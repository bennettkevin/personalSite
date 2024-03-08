 import { Link } from "react-router-dom"
 import './index.scss'

const Home = () => (
    <div className="container home-page">
        <div className="text-field">
            <h1>
                Hello, I'm Kevin
            </h1>
            <h2>Computer science student</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
    </div>
)

export default Home