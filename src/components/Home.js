import React from 'react'
import '../site.css'
import iranImg from '../iran.jpg'
import canadaImg from '../canada.jpg'
import americaImg from '../america.jpg'
let irUrl = 'http://localhost:3000/Iran'
let cUrl = 'http://localhost:3000/Canada'
let usUrl = 'http://localhost:3000/America'

const Home = () => {
  return (
    <div>

      <div className="box-row">
        <div className="box">
          <div className="img-style">
            <img src={iranImg} alt='pic og iran-tehran'></img>

          </div>
          <div className="span-column">
            <span>   Iran, a mountainous, arid, and ethnically</span>
            <span>diverse country of southwestern Asia.</span>
          </div>
          <a className='a-decoration' href={irUrl}>read more</a>

        </div>



        <div className="box">
          <div className="img-style">
            <img src={canadaImg} alt='pic og iran-tehran'></img>

          </div>
          <div className="span-column">
            <span>   espite Canada’s great size, it is one of  </span>
            <span>the world’s most sparsely populated countries   </span>
          </div>
          <a className='a-decoration' href={cUrl}>read more</a>
        </div>


        <div className="box">
          <div className="img-style">
            <img src={americaImg} alt='pic og iran-tehran'></img>

          </div>
          <div className="span-column">
            <span>      United States, officially United States  </span>
            <span>of America, abbreviated U.S. or U.S.A </span>
          </div>
          <a className='a-decoration' href={usUrl}>read more</a>
        </div>
      </div></div>

  )
}
export default Home