import Link from 'next/link'
import Logo from './Logo'
import styles from './styles/MainNav.module.css'

const MainNav = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/posts'>
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav
