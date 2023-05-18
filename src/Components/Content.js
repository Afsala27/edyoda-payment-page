import React from 'react'

function Content() {
  return (
    <div className='content'>
      <div className='heading-content'>
      <p>Access curated courses worth <br/>
       <span className='price-strike'>₹ 18,500</span> at just  
       <span className="price-color"> ₹ 99</span> per year!</p>
      </div>
      <div className='list-content'>
        <p> 
        <span className="price-color-1">100+</span> Job relevant courses
        </p>
        <p> 
        <span className="price-color-1">20,000++</span> Hours of content
        </p>
        <p> 
        <span className="price-color-1">Exclusive</span> webinar access
        </p>
        <p> 
        Scholarship worth <span className="price-color-1">₹94,500</span>
        </p>
        <p> 
        <span className="price-color-1">Ad Free</span> learning experience
        </p>
      </div>
      <div className='content-images'>

        <img src='Icon book.png' className='icon-image'/>
        <img src='Icon time.png' className='icon-image'/>
        <img src='Icon tv.png' className='icon-image'/>
        <img src='Icon deg.png' className='icon-image'/>
        <img src='Icon adds.png' className='icon-image'/>
      </div>
      </div>
  )
}

export default Content