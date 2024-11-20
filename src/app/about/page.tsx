import Image from "next/image";
import "../about/globals.css"
import moizabout from "../../../public/moizabout.jpg"

export default function Aboutpage (){
    return(
        <main className="about">
            <div className="about-sect">
                <div className="about-col-1">
                <h2>About <span className="span">Me</span></h2>
                <Image src={moizabout} alt="mypic" width={250} height={250} className="image"/>
                </div>
                <div className="about-col-2">
                <h2>Frontend <span className="span">Developer</span></h2>
                <p className="peragraph">As a front-end developer, I excel in HTML, CSS, and JavaScript, creating dynamic and responsive web applications. Proficient in Next.js for optimized performance and SEO. Committed to delivering intuitive user experiences and collaborating effectively with design and development teams.</p>
                <div className="button">
                <a href="/about">Read More</a>
                </div>
                </div>
            </div>
        </main>
    )
}