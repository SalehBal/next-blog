import React from 'react';
import css from './hero.module.css';
import Image from 'next/image';
function Hero() {
    return (
        <section className={css.hero}>
            <div className={css.image}>
                <Image src={'/images/site/Profile.png'} alt='Saleh Bal' width={300} height={300} />
            </div>
            <h1>Hi I'm Saleh</h1>
            <p>I'm a full-stack web developer, and this is my blog.</p>
        </section>
    );
}

export default Hero;
