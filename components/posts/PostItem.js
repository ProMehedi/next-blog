import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/PostItem.module.css'

const PostItem = ({ post }) => {
  const { slug, title, image, date, excerpt } = post

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imgPath = `/images/posts/${slug}/${image}`

  return (
    <li className={styles.post}>
      <Link href='/posts/single-post'>
        <a>
          <div className={styles.image}>
            <Image src={imgPath} alt={title} width={400} height={330} />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{readableDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
