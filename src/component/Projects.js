import React from 'react'
import DailyMent from '../component/Img/Project/DailyMent.png'
import SaveMotiv from '../component/Img/Project/SaveMotiv.png'
import NewsNotch from '../component/Img/Project/favicon.ico'
import WorkIt from '../component/Img/Project/WorkIt.png'
import Capture from '../component/Img/Project/Capture.PNG'
import home_car from '../component/Img/Project/home_car.jpg'

export default function Projects() {
  return (
    <div>
         
    <section id="portfolio">
        <h2>Portfolio</h2>
        <hr style={{marginLeft:"250px"}}/>
        <div class="container">
            <div class="portfolio__projects">
                <div class="row">
                    <div class="col-lg-4 col-md-6 border shadow rounded">
                    
                        <figure>
                        <a href="https://github.com/omkar-phadtare/DailyMent"><i class="fa fa-search-plus" aria-hidden="true"></i>
                            <figcaption>
                            <h3>DailyMent</h3>
                                <p>Make List of Daily Task using DailyMent | Repository |</p>
                                <p>MERN Stack</p>
                                
                            </figcaption>
                            </a>
                            <img src={DailyMent} width="250px" height="250px"/>
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-6 border shadow rounded">
                        <figure>
                        <a href="https://omkar-phadtare.github.io/TextPlay"><i class="fa fa-search-plus" aria-hidden="true"></i>
                            <figcaption>
                            <h3>TextPlay</h3>
                              <p>Text Mutational application to remove extra space make text lower to upper</p>
                               <p>ReactJS , Bootstrap</p>
                            </figcaption>
                            </a>
                            <img src={Capture} width="250px" height="250px" />
                            
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-6 border shadow rounded">
                        <figure>
                        <a href="https://github.com/omkar-phadtare/SaveMotivations"><i class="fa fa-search-plus" aria-hidden="true"></i>
                            <figcaption>
                                <h3>SaveMotivaion</h3>
                                <p>Share your Daily Motivation to every one or keep it for you self easy to use.</p>
                                <p>ReactJS, Bootstrap, Firebase</p>
                                
                            </figcaption>
                            </a>
                            <img src={SaveMotiv} width="250px" height="250px"/>
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-6  border shadow rounded">
                        <figure>
                        <a href="#"><i class="fa fa-search-plus" aria-hidden="true"></i>
                            <figcaption>
                                <h3>Car Rental System</h3>
                                <p>Car Rental System to book car for perticular day update car information.</p>
                              <p>PHP , Javascript , Bootstrap , html/css</p>
                            </figcaption>
                            </a>
                            <img src={home_car} width="250px" height="250px" />
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-6 border shadow rounded">
                        <figure>
                        <a href="https://github.com/omkar-phadtare/news-notch"><i class="fa fa-search-plus" aria-hidden="true"></i>
                            <figcaption>
                                <h3>NewsNotch</h3>
                                <p>Daily updated News by category and weather info featuring weather emoji</p>
                               <p>ReactJS , NewsApi , WeatherApi</p>
                            </figcaption>
                            </a>
                            <img src={NewsNotch}  width="250px" height="250px"/>
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-6 border shadow rounded">
                        <figure>
                        <a href="#"><i class="fa fa-search-plus" aria-hidden="true"></i>
                            <figcaption>
                                <h3>WorkIt</h3>
                                <p>Coming Soon</p>
                               
                            </figcaption>
                            </a>
                            <img src={WorkIt} width="250px" height="250px"/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
