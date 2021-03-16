import Meta from '../../components/Meta'
import AllPosts from '../../components/posts/AllPosts'
import { getAllPosts } from '../../util/PostUtil'

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Meta title='NextBlog - All Blog Posts' />
      <AllPosts posts={posts} />
    </>
  )
}

export const getStaticProps = () => {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default AllPostsPage
