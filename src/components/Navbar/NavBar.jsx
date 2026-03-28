import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import problogic from '../../images/problogic.jpg';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = useState(false);

    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${!top ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto flex flex-row justify-between items-center py-3 px-6">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <HashLink smooth to="/#hero">
                        <img className="prob-logic-logo-navbar" src={problogic} alt="ProbLogic" />
                    </HashLink>
                    <HashLink smooth to="/#hero">
                        <span className={`font-extrabold text-2xl tracking-tight transition-colors duration-300 ${!top ? 'text-gray-900' : 'text-white'}`}>
                            ProbLogic
                        </span>
                    </HashLink>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <HashLink
                        smooth to="/#about"
                        className={`text-sm font-medium transition-colors duration-300 hover:opacity-100 ${!top ? 'text-gray-600 hover:text-gray-900' : 'text-blue-100 hover:text-white'}`}
                    >
                        About
                    </HashLink>
                    <HashLink
                        smooth to="/#services"
                        className={`text-sm font-medium transition-colors duration-300 hover:opacity-100 ${!top ? 'text-gray-600 hover:text-gray-900' : 'text-blue-100 hover:text-white'}`}
                    >
                        Services
                    </HashLink>
                    <HashLink
                        smooth to="/#expertise"
                        className={`text-sm font-medium transition-colors duration-300 hover:opacity-100 ${!top ? 'text-gray-600 hover:text-gray-900' : 'text-blue-100 hover:text-white'}`}
                    >
                        Expertise
                    </HashLink>
                    <HashLink
                        smooth to="/#process"
                        className={`text-sm font-medium transition-colors duration-300 hover:opacity-100 ${!top ? 'text-gray-600 hover:text-gray-900' : 'text-blue-100 hover:text-white'}`}
                    >
                        Process
                    </HashLink>
                    <Link
                        to="/contact"
                        className={`text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-300 ${!top ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                    >
                        Get Talent
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button className="p-2 rounded-lg lg:hidden" onClick={handleClick}>
                    <svg className={`h-6 w-6 transition-colors duration-300 ${!top ? 'text-gray-900' : 'text-white'}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        )}
                    </svg>
                </button>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="fixed top-16 left-0 w-full bg-white shadow-xl lg:hidden p-8">
                        <div className="flex flex-col space-y-5">
                            <HashLink smooth to="/#about" onClick={() => setisOpen(false)} className="text-gray-700 font-medium">About</HashLink>
                            <HashLink smooth to="/#services" onClick={() => setisOpen(false)} className="text-gray-700 font-medium">Services</HashLink>
                            <HashLink smooth to="/#expertise" onClick={() => setisOpen(false)} className="text-gray-700 font-medium">Expertise</HashLink>
                            <HashLink smooth to="/#process" onClick={() => setisOpen(false)} className="text-gray-700 font-medium">Process</HashLink>
                            <Link to="/contact" onClick={() => setisOpen(false)} className="bg-gray-900 text-white font-bold text-center px-6 py-3 rounded-lg">Get Talent</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
