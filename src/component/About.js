import React from 'react'
import human from '../component/Img/human.png'

export default function About() {
  return (
    <div>
         
    <section id="about">
        <h2>About</h2>
        <hr/>
        <div class="container">
        <img src={human}/>
            <p class="lead">Full Stack Developer</p>
            <p>I'm <span class="bold">Omkar</span> Phadtare, a <strong>Computer Science Student</strong> and <strong>Developer</strong> from India.</p>
            <p>I love <strong>Coding</strong> </p>
            <p>Aside from development, I like playing Chess.</p>
            
        </div>
        
    </section>
    </div>
  )
}
