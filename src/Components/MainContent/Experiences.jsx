import React from 'react'

const Experiences = () => {
  return (
    <section id='experiences' className='experience-wrap'>
      <div className='grid wide experience-container'>
        <div className='row'>
          <div className='col l-6 m-12 c-12 experience-img-layout'>
            <div className='experience-img-back'></div>
            <div className='experience-img-front'></div>
          </div>
          <div className='col l-6 m-12 c-0 experience-content'>
            <div className="experience-content-layout">
              <h3 className='experience-title'>
                memorable outdoor experiences
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt quo soluta minima libero laborum, corporis error esse vitae placeat blanditiis reiciendis vel? Minima.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?
              </p>
              <a href="" className='btn read-more-btn'>read more</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences