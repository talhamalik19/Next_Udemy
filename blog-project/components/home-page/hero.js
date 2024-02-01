import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/talha.jpg'
          alt='An image showing Talha'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Talha Malik</h1>
      <p>
        I blog about web development - especially React and Next JS.
      </p>
    </section>
  );
}

export default Hero;
