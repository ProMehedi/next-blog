import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostContent from '../../components/posts/post-detail/PostContent'

const PostDetailPage = ({ postContent }) => {
  return <PostContent postContent={postContent} />
}

export const getStaticProps = async (context) => {
  const { slug } = context.params

  const postDirectory = path.join(process.cwd(), 'content', 'posts')

  const getPostsFiles = () => {
    return fs.readdirSync(postDirectory)
  }

  const getPostData = (postIdentifier) => {
    const postSlug = postIdentifier.replace(/\.md$/, '') // This the file extension

    const filePath = path.join(postDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postData = {
      slug: postSlug,
      ...data,
      content,
    }

    return postData
  }

  const postContent = getPostData(slug)

  return {
    props: {
      postContent,
    },
    revalidate: 600,
  }
}

export const getStaticPaths = async () => {
  const postDirectory = path.join(process.cwd(), 'content', 'posts')

  const getPostsFiles = () => {
    return fs.readdirSync(postDirectory)
  }
  const postFileNames = getPostsFiles()

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, '')) // This the file extension

  const paths = slugs.map((slug) => ({ params: { slug } }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default PostDetailPage
