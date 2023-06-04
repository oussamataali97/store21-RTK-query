import React from 'react'
import { Faq } from "../components/Faq"
import { Feature } from "../components/Feature";
import { Header } from "../components/Header";
import { Pricing } from "../components/Pricing";
import { Statistic } from "../components/Statistic";
import People from '../components/People';

const Home = () => {
    return (
        <div>
            <Header />
            <Feature />
            <Pricing />
            <Faq />
            <Statistic />
            <People/>
        </div>
    )
}

export default Home