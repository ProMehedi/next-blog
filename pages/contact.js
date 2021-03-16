import { useState } from 'react'
import Notification from '../components/ui/Notification'
import styles from '../styles/Contact.module.css'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [reqStatus, setReqStatus] = useState() // 'pending', 'success', 'error'
  const [error, setError] = useState()

  const sendContactData = async (contactDetails) => {
    const respose = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const resData = await respose.json()

    if (!respose.ok) {
      throw new Error(resData.message || 'Something went wrong!')
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setReqStatus('pending')

    const contactDetails = { name, email, message }
    try {
      await sendContactData(contactDetails)
      setName('')
      setEmail('')
      setMessage('')
      setReqStatus('success')
    } catch (error) {
      setReqStatus('error')
      setError(error.message || 'Failed to send your message!')
    }
  }

  let notification

  if (reqStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending',
      message: 'Your message is on its way!',
    }
  }

  if (reqStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Your message send successfully!',
    }
  }

  if (reqStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: error,
    }
  }
  // switch (reqStatus) {
  //   case 'pending':
  //     return (notification = {
  //       status: 'pending',
  //       title: 'Sending',
  //       message: 'Your message is on its way!',
  //     })

  //   case 'success':
  //     return (notification = {
  //       status: 'success',
  //       title: 'Success',
  //       message: 'Your message send successfully!',
  //     })
  //   case 'error':
  //     return (notification = {
  //       status: 'error',
  //       title: 'Error',
  //       message: error,
  //     })
  // }

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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  )
}

export default ContactPage
