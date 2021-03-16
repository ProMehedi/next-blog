import AllPosts from '../../components/posts/AllPosts'
import { getAllPosts } from '../../helpers/PostUtil'

const AllPostsPage = ({ posts }) => {
  return (
    <>
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
