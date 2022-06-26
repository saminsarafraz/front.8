import React  from 'react'
import '../site.css'
import iranImg from '../iran.jpg'
import canadaImg from '../canada.jpg'
import americaImg from '../america.jpg'

const Home=()=>{
    return(
        <div>
  
          <div className="box-row">
            <div className="box">
              <div className="img-style">
                <img src={iranImg} alt='pic og iran-tehran'></img>
              
              </div>
              <div className="span-column">
                <span>   Iran, a mountainous, arid, and ethnically</span>
                <span>diverse country of southwestern Asia. if you want to read more click on name of country in navbar</span>
              </div>
          
            </div>
  
  
  
            <div className="box">
            <div className="img-style">
                <img src={canadaImg} alt='pic og iran-tehran'></img>
              
              </div>
              <div className="span-column">
                <span>   espite Canada’s great size, it is one of  </span>
                <span>the world’s most sparsely populated countries  if you want to read more click on name of country i navbar </span>
              </div>
            </div>


            <div className="box">
            <div className="img-style">
                <img src={americaImg} alt='pic og iran-tehran'></img>
              
              </div>
              <div className="span-column">
                <span>      United States, officially United States  </span>
                <span>of America, abbreviated U.S. or U.S.A. if you want to read more click on name of country i navbar </span>
              </div>

            </div>
          </div></div>

    )
}
export default Home