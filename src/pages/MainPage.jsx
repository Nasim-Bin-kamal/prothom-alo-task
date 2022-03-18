import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainContents from '../components/MainContents/MainContents';

const MainPage = () => {
    return (
        <div>
            <Header />
            <MainContents />
            <Footer />
        </div>
    );
};

export default MainPage;