import Link from "next/link";

export default function Header(){
    return(
        <header className="header">
            <div className="head">
                <h2 className="heading">Prtfolio.</h2>
                <nav>
                    <ul className="nav">
                        <li><Link href="/" className="atag">Home</Link></li>
                        <li><Link href="/about" className="atag">About</Link></li>
                        <li><Link href="/contact" className="atag">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}