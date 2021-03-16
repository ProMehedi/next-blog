import styles from '../styles/Contact.module.css'

const ContactPage = () => {
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' required />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your Email</label>
            <input type='email' id='email' required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea type='email' id='message' rows='5' required></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactPage
