import PostsGrid from './PostsGrid'
import styles from './styles/AllPosts.module.css'

const AllPosts = () => {
  const DUMMY_POSTS = [
    {
      slug: 'getting-started-nextjs',
      title: 'Getting Started With Nextjs',
      image: 'getting-started-nextjs.png',
      excerpt: 'This is post exceprt for post title 1',
      date: '2020-02-13',
    },
    {
      slug: 'nextjs-file-based-routing',
      title: 'Nextjs File Based Routing 2',
      image: 'nextjs-file-based-routing.png',
      excerpt: 'This is post exceprt for post title 2',
      date: '2020-01-10',
    },
    {
      slug: 'getting-started-nextjs-2',
      title: 'Getting Started With Nextjs 2',
      image: 'getting-started-nextjs.png',
      excerpt: 'This is post exceprt for post title 1',
      date: '2020-02-13',
    },
    {
      slug: 'nextjs-file-based-routing-2',
      title: 'Nextjs File Based Routing 3',
      image: 'nextjs-file-based-routing.png',
      excerpt: 'This is post exceprt for post title 2',
      date: '2020-01-10',
    },
    {
      slug: 'getting-started-nextjs-3',
      title: 'Getting Started With Nextjs 3',
      image: 'getting-started-nextjs.png',
      excerpt: 'This is post exceprt for post title 1',
      date: '2020-02-13',
    },
    {
      slug: 'nextjs-file-based-routing-3',
      title: 'Nextjs File Based Routing 3',
      image: 'nextjs-file-based-routing.png',
      excerpt: 'This is post exceprt for post title 2',
      date: '2020-01-10',
    },
  ]

  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={DUMMY_POSTS} />
    </section>
  )
}

export default AllPosts
