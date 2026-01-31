export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2>About Me</h2>

                <p>
                    I’m Lohit Aditya, a Full Stack Web Development Intern at Future Interns.
                    I enjoy building clean, responsive, and real-world web applications.
                </p>

                <h3>Skills</h3>

                {/* Skills Badges */}
                <div className="skills">
                    <span>React.js</span>
                    <span>JavaScript</span>
                    <span>HTML + CSS</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                </div>
            </div>
        </section>
    );
}
