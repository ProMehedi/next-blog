import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import FeaturedPosts from '../components/homepage/FeaturedPosts'
import Hero from '../components/homepage/Hero'

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export const getStaticProps = async () => {
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

  const getAllPosts = () => {
    const postFiles = getPostsFiles()

    const allPosts = postFiles.map((postFile) => {
      return getPostData(postFile)
    })

    const sortedPosts = allPosts.sort((postA, postB) =>
      postA.date > postB.date ? -1 : 1
    )

    return sortedPosts
  }

  const getFeaturedPosts = () => {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter((post) => post.isFeatured)

    return featuredPosts
  }

  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
