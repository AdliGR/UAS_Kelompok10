import React from 'react';
import Navbar from '../components/Navbar';
import WisataAlam from '../components/WisataAlam';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader'

function Home() {
    return (
        <div>
            <Navbar />
            <PageHeader />
            <WisataAlam />
            <Footer />
        </div>
    );
}

export default Home;
