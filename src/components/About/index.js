import GreensboroBridge from '../../Assets/Images/GreensboroBridge.JPG'

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
                    <img src={GreensboroBridge} alt="Greensboro Urban loop Battleground Ave section."/>
            </section>
        </div>
    </div>
)

export default About