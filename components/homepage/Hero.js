import Image from 'next/image'
import styles from './styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/Mehedi-Hasan-promehedi.com.jpg'
          alt='Mehedi Hasan'
          width={350}
          height={350}
        />
      </div>
      <h1>Hi, I'm Mehedi</h1>
      <p>
        A fullstack web developer. I blog about web development - specially
        frontend framework like ReactJS
      </p>
    </section>
  )
}

export default Hero
