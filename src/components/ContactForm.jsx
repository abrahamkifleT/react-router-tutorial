import React from 'react'

const ContactForm = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    }}>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        width: '300px'
      }}>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <textarea placeholder='message'></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm