import ReactMarkdown from 'react-markdown'
import PostHeader from './PostHeader'
import styles from './styles/PostContent.module.css'

const PostContent = ({ postContent }) => {
  const imgPath = `/images/posts/${postContent.slug}/${postContent.image}`

  return (
    <artitle className={styles.content}>
      <PostHeader title={postContent.title} image={imgPath} />
      <ReactMarkdown>{postContent.content}</ReactMarkdown>
    </artitle>
  )
}

export default PostContent
