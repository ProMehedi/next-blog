import Link from 'next/link'
import styles from './styles/Logo.module.css'

const Logo = () => {
  return (
    <Link href='/'>
      <a className={styles.logo}>
        Next<span>Blog</span>
      </a>
    </Link>
  )
}

export default Logo
