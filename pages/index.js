import FeaturedPosts from '../components/homepage/FeaturedPosts'
import Hero from '../components/homepage/Hero'
import { getFeaturedPosts } from '../util/PostUtil'

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
