import { useState } from 'react'
import styles from '../styles/Contact.module.css'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()

    const bodyData = { name, email, message }

    const reqData = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resData = await reqData.json()

    setName('')
    setEmail('')
    setMessage('')

    console.log(resData)
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            type='email'
            id='message'
            rows='5'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactPage
