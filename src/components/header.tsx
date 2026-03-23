import '../styles/header.css';
import { useState } from 'react';
import arrow from '../assets/arrow.png';
import art from '../assets/art.png';
import Navbar from './navbar';

const themes = [
    { id: 'default',  label: 'Default',      dot1: '#47d7ff', dot2: '#ff2d2d' },
    { id: 'toxic',    label: 'Toxic Brat',    dot1: '#3AE13A', dot2: '#B63FDA' },
    { id: 'unroyal',  label: 'Unroyal Blue',  dot1: '#160EAB', dot2: '#BA921A' },
];

const PortfolioHeader = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('default');

    const applyTheme = (id: string) => {
        if (id === 'default') {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', id);
        }
        setActive(id);
        setOpen(false);
    };

    return (
        <div className='header-bar'>
        <header>
            <button type="button" className="back-to-top" aria-label="Back to Top"
                onClick={() => { document.getElementById("top")?.scrollIntoView({ behavior: "smooth" }); }}>
                <img src={arrow} alt="Back to Top Arrow Icon"/>
            </button>

            <Navbar />

            <div className="theme-switcher">
                <button className="palette-btn" onClick={() => setOpen(!open)} aria-label="Switch theme">
                    <img src={art} alt="Theme switcher" />
                </button>
                {open && (
                    <div className="theme-popup">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                className={`theme-option ${active === t.id ? 'theme-active' : ''}`}
                                onClick={() => applyTheme(t.id)}
                            >
                                <span className="theme-dot" style={{ background: t.dot1 }} />
                                <span className="theme-dot" style={{ background: t.dot2 }} />
                                {t.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </header>
        </div>
    );
};

export default PortfolioHeader;
