import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import NotFound from '../../pages/NotFound/NotFound';
import AboutPomodoro from '../../pages/AboutPomodoro/AboutPomodoro';
import Home from '../../pages/Home/Home';
import { useEffect } from 'react';
import History from '../../pages/Historys/History';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
}

function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/about" element={<AboutPomodoro />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default MainRouter;