import React from 'react'
import { Parallax, useParallax } from 'react-scroll-parallax'
import "./progressCard.css"
export default function ProgressCard() {
  return (
    <div>
              
        <div className='head-skill'>
            <h2 className='skill-c'>SKILLS</h2>
        </div>
       <hr style={{marginLeft:"250px"}}/>
       <div class="container progress-div">  

  <label for="onehundred" class="label ms-4 me-4 border">React Js</label>
  <label for="onehundred" class="label ms-4 me-4  border">Java</label>
  <label for="onehundred" class="label ms-4 me-4  border">HTML</label>
  <label for="onehundred" class="label ms-4 me-4  border">Bootstrap</label>
  <label for="onehundred" class="label ms-4 me-4  border">C</label>

  <div class="progress">
    <div class="progress-bar" id="seventyfive"></div>
  </div>
</div>
<div class="container progress-div">
   
<label for="onehundred" class="label ms-4 me-4 border">Node Js</label>
<label for="onehundred" class="label ms-4 me-4  border">Express Js</label>
  <label for="onehundred" class="label ms-4 me-4  border">Php</label>
  <label for="onehundred" class="label ms-4 me-4  border">SQL</label>
   
  <div class="progress">
    <div class="progress-bar"  id="fifty"></div>
  </div>
</div>
<div class="container progress-div">
 
<label for="onehundred" class="label ms-4 me-4 border">Python</label>
  <label for="onehundred" class="label ms-4 me-4  border">FireBase</label>
  <label for="onehundred" class="label ms-4 me-4  border">Mongodb</label>

  <div class="progress">
    <div class="progress-bar " id="twentyfive"></div>
  </div>
</div>

    </div>
  )
}
