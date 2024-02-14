
import { Link } from "react-router-dom"
import LanguageSelector from "./LanguageChanger"
const Header = () => {
    return (
        <header className="bg-gray-100 p-2">
            <nav className="flex items-center justify-between container mx-auto">
                <Link to="/">
                    <h1>Auth</h1>
                </Link>
                <ul className="flex items-center gap-5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <LanguageSelector />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header