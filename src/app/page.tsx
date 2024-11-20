import Image from "next/image";
import moiz from "../../public/moiz.jpg"
import Skill from "./component/skill";

export default function Hero (){

  return(
    <main className="main-hero">
      <div className="hero">
          <Image src={moiz} alt="moizimage" width={250} height={350} className="image"/>
        <div className="section">
          <h2 className="heading">Hello! <br /> I m Moiz Qureshi</h2>
          <p className="peragraph">As a front-end developer, I excel in HTML, CSS, and JavaScript, creating dynamic and responsive web applications. Proficient in Next.js for optimized performance and SEO. Committed to delivering intuitive user experiences and collaborating effectively with design and development teams.</p>
          <div className="button">
            <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank"><button>HireMe</button></a>
            <a href="https://github.com/MoizQureshi1" target="blank"><button>Projects</button></a>
          </div>
        </div>
      </div>
      <Skill/>
    </main>
  )
}