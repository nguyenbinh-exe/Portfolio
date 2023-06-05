import React, {useState} from 'react';
import "./Header.css"

const Header = () => {
    /*==================    Toggle Menu    ==================*/
    const[Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">
                    Nguyen
                </a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active_link">
                                <i className="uil uil-estate nav_icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link active_link">
                                <i className="uil uil-user nav_icon"></i>
                                About Me
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link active_link">
                                <i className="uil uil-file-alt nav_icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#projects" className="nav_link active_link">
                                <i className="uil uil-scenery nav_icon"></i>
                                Projects
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#experience" className="nav_link active_link">
                                <i className="uil uil-briefcase nav_icon"></i>
                                Timeline
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link active_link">
                                <i className="uil uil-message nav_icon"></i>
                                Contact Me
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}>
                    </i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header