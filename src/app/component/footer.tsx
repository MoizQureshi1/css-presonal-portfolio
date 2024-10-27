import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-head">
                <div className="footer-sect">
                    <h2>
                        Moiz <span>Qureshi</span>
                    </h2>
                    <p>
                        Proficient in Next.js for optimized performance and SEO. Committed to delivering intuitive user experiences and collaborating effectively with design and development teams.
                    </p>
                </div>
                <div className="footer-links">
                    <div className="footer-link-1">
                        <h2>About Us</h2>
                        <a href="/about">Home</a>
                        <a href="/contact">Contact</a>
                        <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="_blank" rel="noopener noreferrer">Hire Me</a>
                        <a href="https://github.com/MoizQureshi1" target="_blank" rel="noopener noreferrer">Projects</a>
                    </div>
                    <div className="footer-link-2">
                        <h2>Help</h2>
                        <a href="/contact">Contact Us</a>
                        <a href="/contact">FAQs</a>
                        <a href="/contact">Support</a>
                        <a href="/contact">Feedback</a>
                    </div>
                    <div className="footer-link-3">
                        <h2>Projects</h2>
                        <a href="https://shop-sphere-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">Shop Sphere</a>
                        <a href="https://travel-world-moiz.vercel.app/" target="_blank" rel="noopener noreferrer">Travel World</a>
                        <a href="https://milestone-5-resume-one.vercel.app/" target="_blank" rel="noopener noreferrer">Unique Resume</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100089981983705" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://www.youtube.com/@solve-swift" target="_blank" rel="noopener noreferrer">
                    <ImYoutube2 />
                </a>
            </div>
            <p className="footer-copy">Copyright &copy; 2024 Adventour.</p>
        </footer>
    );
}