export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>© {new Date().getFullYear()} Lohit Aditya. All rights reserved.</p>

                <div className="footer-links">
                    <a href="https://github.com/" target="_blank">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
