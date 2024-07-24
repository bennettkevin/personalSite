import GreensboroBridge from '../../Assets/Images/GreensboroBridge.JPG'
import './index.scss'

const About = () => (
    <div className="container about-page">
        <div className="text-field">
            <h1>About ME</h1>
            <section className="main-section">
                <header className="section-header">History</header>
                <p>Upon highschool graduation I started college at GTCC, this would not be my last time in school, in fact 
                    at the halfway point of my second semester I would drop out. This lead to my career in construction, a total 
                    of 6 years on heavy highway/bridge construction. Below is the first bridge project I worked on it is a section 
                    of the urban loop in Greensboro, NC.</p>
                <img id="greensboro" src={GreensboroBridge} alt="Greensboro Urban loop Battleground Ave section."/>
                <p id="bottomPara">Currently enrolled at GTCC again pursuing an AS Computer Science. With plans to attend university and obtain my BS in Computer Science.
                    Technology has been a passion of mine for my entire life, and I am enjoying the process of learning more about it in ways that allow 
                    me to not only progress in a way that can benifit me from a career standpoint but also to pursue the development of personal projects.
                    Feel free to check out some of the things I have worked on and projects I have built while learning on <a target='_blank' rel='noreferrer' href='https://github.com/bennettkevin'>GitHub.</a>
                    </p>
            </section>
        </div>
        <img src={GreensboroBridge} alt="Greensboro Urban loop Battleground Ave section."/>
    </div>
)

export default About