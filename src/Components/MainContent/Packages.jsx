import React from 'react'

const Packages = () => {

  const packagesList = [
    {
      img: 'assets/images/img-1.jpg',
      name: 'featured tour package',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.',
      price: '$250 - $450',
    },
    {
      img: 'assets/images/img-2.jpg',
      name: 'featured tour package',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.',
      price: '$250 - $450',
    },
    {
      img: 'assets/images/img-3.jpg',
      name: 'featured tour package',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.',
      price: '$250 - $450',
    },
    {
      img: 'assets/images/img-4.jpg',
      name: 'featured tour package',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.',
      price: '$250 - $450',
    },
    {
      img: 'assets/images/img-5.jpg',
      name: 'featured tour package',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.',
      price: '$250 - $450',
    },
    {
      img: 'assets/images/img-6.jpg',
      name: 'featured tour package',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.',
      price: '$250 - $450',
    },
    
  ]

  return (
    <section id='buy-packages' className='packages-wrap'>
      <div className='grid wide packages-layout'>
        <div className='packages-title'>
          <h3>
            popular packages
          </h3>
        </div>
        <div className="packages">
          <ul className="row packages-list">
            {packagesList.map(({img, name, text, price }, index) => {
              return (
                <li key={index} className="col l-4 m-6 c-12 packages-item">
                  <div className="package-item-wrap">
                    <img className='package-item-img' src={img} alt="" />
                    <div className='package-item-content'>
                      <h3 className='packages-item-title'>
                        {name}
                      </h3>
                      <p>
                        {text}
                      </p>
                      <span className='package-item-price'>
                        {price}
                      </span>
                      <a className="btn read-more-btn explore-now-btn">explore now</a>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

      </div>

    </section>
  )
}

export default Packages