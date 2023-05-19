import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/Profile.png' alt='An image showing Max' width={300} height={300} />
            </div>
            <h1>Hi, I'm Saleh</h1>
            <p>Full-stack web developer | TypeScript React.js Node.js | Challenging tasks?, I just get it done.</p>
        </section>
    );
}

export default Hero;
