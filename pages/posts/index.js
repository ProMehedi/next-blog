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
    revalidate: 100,
  }
}

export default AllPostsPage
