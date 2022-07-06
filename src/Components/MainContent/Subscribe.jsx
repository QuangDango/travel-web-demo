import React from 'react'

const Subscribe = () => {
  return (
    <section className='subscribe-wrap'>
      <div className="subscribe-content">
        <h3>
          subscribe now
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsam repellat nostrum esse officiis unde quisquam corporis doloremque adipisci similique!
        </p>
        <div className="email-input-box">
          <input className='email-input' type="email" placeholder='Enter your email' />
          <button className='btn subscribe-btn'>
            subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe