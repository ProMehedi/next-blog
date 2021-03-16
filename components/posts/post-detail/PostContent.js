import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Meta from '../../Meta'
import PostHeader from './PostHeader'
import styles from './styles/PostContent.module.css'

const PostContent = ({ postContent }) => {
  const imgPath = `/images/posts/${postContent.slug}/${postContent.image}`

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${postContent.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={900}
    //       height={500}
    //       layout='responsive'
    //     />
    //   )
    // },
    paragraph(paragraph) {
      const { node } = paragraph
      if (node.children[0].type === 'image') {
        const image = node.children[0]

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${postContent.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
              layout='responsive'
            />
          </div>
        )
      } else {
        return <p>{paragraph.children}</p>
      }
    },

    code(code) {
      const { language, value } = code
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      )
    },
  }

  return (
    <>
      <Meta
        title={`NextBlog - ${postContent.title}`}
        desc={postContent.excerpt}
      />
      <artitle className={styles.content}>
        <PostHeader title={postContent.title} image={imgPath} />
        <ReactMarkdown renderers={customRenderers}>
          {postContent.content}
        </ReactMarkdown>
      </artitle>
    </>
  )
}

export default PostContent
