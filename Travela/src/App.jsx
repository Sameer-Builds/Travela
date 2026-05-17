import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import Copyright from './components/Copyright';
import BackToTop from './components/BackToTop';
import Spinner from './components/Spinner';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const Layout = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Subscribe />
            <Footer />
            <Copyright />
            <BackToTop />
        </>
    );
};

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Spinner />}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
