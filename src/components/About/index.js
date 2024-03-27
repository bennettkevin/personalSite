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
            </section>
            <section className='main-section'>
                <header className='section-header'>Current</header>
                <p>Currently I am enrolled in the AS - Computer Science program at GTCC. I also recently started uploading some educational 
                    content to <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCAbf4RdjXjTtMk7iRhysY-g'>YouTube</a>, Introduction to Python. This is exploring introductory concepts of programming and logic using python.
                    This site is also something I'm working on and will continue to build on you can see it on 
                    <a target='_blank' rel='noreferrer' href='https://github.com/bennettkevin'>GitHub.</a>
                </p>
            </section>
            
        </div>
        <img src={GreensboroBridge} alt="Greensboro Urban loop Battleground Ave section."/>
    </div>
)

export default About