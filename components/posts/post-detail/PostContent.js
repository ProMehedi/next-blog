import PostHeader from './PostHeader'
import styles from './styles/PostContent.module.css'

const DUMMY_POST = {
  slug: 'getting-started-nextjs',
  title: 'Getting Started With Nextjs',
  image: 'getting-started-nextjs.png',
  content: '# This is post exceprt for post title 1',
  date: '2020-02-13',
}

const PostContent = () => {
  const imgPath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return (
    <artitle className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imgPath} />
      <div>{DUMMY_POST.content}</div>
    </artitle>
  )
}

export default PostContent
