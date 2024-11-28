import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sumario from '@/components/sumario/Sumario';
import "../styles/globals.css";


export function ReceitasDespesas() {

    return (
        <section>
            <Header />
            <Sumario />
            <Footer />
        </section>
    );

}

export default ReceitasDespesas;
