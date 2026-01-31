export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            desc: "A clean, responsive professional portfolio website built using React for Future Interns internship.",
            status: "Completed",
        },
        {
            title: "Client Lead Management System (Mini CRM)",
            desc: "A simple CRM system to manage client leads with features like lead listing, status updates, notes, and backend integration.",
            status: "In Progress",
        },
        {
            title: "Local Business Website & Live Pitch Project",
            desc: "A professional website built for a real local business along with a pitch explaining how it helps business growth.",
            status: "Upcoming",
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>

                <div className="project-grid">
                    {projects.map((p, i) => (
                        <div key={i} className="project-card">
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>

                            <span className="status">{p.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
