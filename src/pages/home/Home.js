import React from 'react';
import About from '../about/About';
import HeaderBanner from '../headerBanner/HeaderBanner';
import Portfolio from '../portfolio/Portfolio';
import Services from '../services/Services';
import Skills from '../skills/Skills';

const Home = () => {
    return (
        <>
            <header>
               <HeaderBanner/>
            </header>
            <main>
                <Skills/>
                <Services/>
                <About/>
                <Portfolio/>
            </main>
        </>
    );
};

export default Home;