import PostContent from '../../components/posts/post-detail/PostContent'
import { getPostData, getPostsFiles } from '../../util/PostUtil'

const PostDetailPage = ({ postContent }) => {
  return <PostContent postContent={postContent} />
}

export const getStaticProps = async (context) => {
  const { slug } = await context.params
  const postContent = getPostData(slug)

  return {
    props: {
      postContent,
    },
    revalidate: 600,
  }
}

export const getStaticPaths = async () => {
  const postFileNames = getPostsFiles()

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, '')) // This the file extension

  const paths = slugs.map((slug) => ({ params: { slug } }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default PostDetailPage
