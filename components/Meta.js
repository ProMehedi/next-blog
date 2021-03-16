import Head from 'next/head'

const Meta = ({
  title,
  keywords,
  desc,
  language,
  author,
  robots,
  charSet,
  contentType,
}) => {
  return (
    <Head>
      <meta charSet={charSet} />
      <meta name='title' content={title} />
      <meta name='description' content={desc} />
      <meta name='keywords' content={keywords} />
      <meta name='robots' content={robots} />
      <meta http-equiv='Content-Type' content={contentType} />
      <meta name='language' content={language} />
      <meta name='author' content={author} />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "NextBlog - Mehedi's Blog Website",
  desc:
    "I'm Mehedi I Blog about web development - specially frontend framework like ReactJS",
  keywords: 'next, reactjs, nextjs',
  language: 'English',
  author: 'Mehedi Hasan',
  robots: 'index, follow',
  charSet: 'utf-8',
  contentType: 'text/html',
}

export default Meta
