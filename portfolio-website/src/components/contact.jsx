export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Me</h2>

                <p className="contact-text">
                    Feel free to reach out for internships, projects, collaborations, or
                    just to connect.
                </p>

                <div className="contact-card">
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />

                        <input type="email" placeholder="Your Email" required />

                        <textarea placeholder="Your Message" rows="5" required />

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}