import React from 'react'

const AvantureIdea = () => {
  return (
    <section className='grid wide advanture-wrap'>
      <div className="row advanture-title">
        <h3>
          advanture idea!
        </h3>
      </div>
      <div className="advanture-category">
        <ul className="row advanture-list">
          <li className="col l-3 m-6 c-12 advanture-item">
            <div className='advanture-item-layout'>
              <img src="assets/images/category-1.jpg" alt="" className='advanture-item-img' />
              <h4 className="advanture-label">bungee jump</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
              <button className='btn read-more-btn'>read more</button>
            </div>
          </li>
          <li className="col l-3 m-6 c-12 advanture-item">
            <div className='advanture-item-layout'>
              <img src="assets/images/category-2.jpg" alt="" className='advanture-item-img' />
              <h4 className="advanture-label">zip lines</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
              <button className='btn read-more-btn'>read more</button>
            </div>
          </li>
          <li className="col l-3 m-6 c-12 advanture-item">
            <div className='advanture-item-layout'>
              <img src="assets/images/category-3.jpg" alt="" className='advanture-item-img' />
              <h4 className="advanture-label">canoeing</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
              <button className='btn read-more-btn'>read more</button>
            </div>
          </li>
          <li className="col l-3 m-6 c-12 advanture-item">
            <div className='advanture-item-layout'>
              <img src="assets/images/category-4.jpg" alt="" className='advanture-item-img' />
              <h4 className="advanture-label">kayaking</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
              <button className='btn read-more-btn'>read more</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AvantureIdea