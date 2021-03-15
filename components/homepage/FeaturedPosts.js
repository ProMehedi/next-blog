import PostsGrid from '../posts/PostsGrid'
import styles from './styles/FeaturedPosts.module.css'

const FeaturedPosts = () => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid />
    </section>
  )
}

export default FeaturedPosts
