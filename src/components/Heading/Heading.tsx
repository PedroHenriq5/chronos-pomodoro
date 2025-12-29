import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon, } from 'lucide-react';
import styles from './Heading.module.css'
import { useState, useEffect } from 'react';

type AvaliableThemes = 'light' | 'dark';

function Heading() {
    const [theme, setTheme] = useState<AvaliableThemes>(() => {
        const storageThemes = localStorage.getItem('theme') as AvaliableThemes | 'dark';
        return storageThemes;
    });

    function handleThemeChange(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        e.preventDefault();

        setTheme(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return newTheme;
        });
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    localStorage.setItem('theme', theme);

    const nextTheme = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

    return (
        <header className={styles.heading}>
            <div className={styles.logo}>
                <a className={styles.logolink} href="#">
                    <TimerIcon />
                    <span>Choronos</span>
                </a>
            </div>
            <div className={styles.linkContainer}>
                <a href='#' aria-label='Home' title='Home' className={styles.linkIcon}><HouseIcon /></a>
                <a href='#' aria-label='History' title='History' className={styles.linkIcon}><HistoryIcon /></a>
                <a href='#' aria-label='Settings' title='Settings' className={styles.linkIcon}><SettingsIcon /></a>
                <a href='#' onClick={handleThemeChange} aria-label='Theme Toggle' title='Theme Toggle' className={styles.linkIcon}>{nextTheme[theme]}</a>
            </div>
        </header>
    );
}

export default Heading;