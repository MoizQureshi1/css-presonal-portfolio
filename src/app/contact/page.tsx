import Image from "next/image";
import "../contact/globals.css"
import liftpic from "../../../public/liftpic.png"

export default function Contact() {
  return (
    <section className="contact">
    <div className="contact-sect">
        <form>
          <h2>Contact Us</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit">
            Send
          </button>
            <p className="pera-1">Or reach out to directly at:</p>
            <p className="pera-2">moizqureshi782008@gmail.com</p>
        </form>
        <Image src={liftpic} alt="Contact Image" width={300} height={400} className="image"/>
    </div>
    </section>
  );
}