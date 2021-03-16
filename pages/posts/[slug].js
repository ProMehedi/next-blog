import PostContent from '../../components/posts/post-detail/PostContent'
import { getPostData } from '../../helpers/PostUtil'

const PostDetailPage = ({ postContent }) => {
  return (
    <>
      <PostContent postContent={postContent} />
    </>
  )
}

export const getStaticProps = async (context) => {
  const { slug } = context.params
  const postContent = getPostData(slug)

  return {
    props: {
      postContent,
    },
    revalidate: 600,
  }
}

export const getStaticPaths = async () => {
  // const paths = [{params: {slug: }}]

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default PostDetailPage
