// Project.jsx

import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import github from '../assets/images/github.svg'
import vector from '../assets/images/Vector.svg'
import world from '../assets/images/world.svg'
import profile from '../assets/images/profile.svg'
import mail from '../assets/images/mail.svg'
import github1 from '../assets/images/github.svg'
import img1 from '../assets/images/Vector 1.svg'
import '../css/Projects.css'

const Projects = () => {
    const { pathname } = useLocation();
    
  return (
    <>
    <Container>
        <div className="nav">
        <a className="brand" href="/">Tony.</a>
        </div>

        <main className='project'>
        <section className='headers'>
                    <h1 className='full'>Full Stack Developer</h1>
                    <p className='name'>Egbah Anthony</p>
                    <p className='lorem1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare 
                    vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
                    
                    <div className="number">
                    <NavLink to="/projects" className={`nom ${pathname === '/project' ? 'active' : ''}`}>
                    <p>01</p>
                    <img src={img1} alt="" />
                    <p className='proman'>Projects</p>
                </NavLink>
                <NavLink to="/download" className={`nom ${pathname === '/download' ? 'active' : ''}`}>
                    <p>02</p>
                    <img src={img1} alt="" />
                    <p>Download Resume</p>
                </NavLink>
                <NavLink to="/contact" className={`nom ${pathname === '/contact' ? 'active' : ''}`}>
                    <p>03</p>
                    <img src={img1} alt="" />
                    <p className='prowoman'>Contact</p>
                </NavLink>
                </div>
                <div className="link">
                <img className='profile' src={profile} alt="" />
                <a className='links' href="mailto:thonieetega182@gmail.com" target="_blank" rel=""> <img src={mail} alt="" />Email me <img src={vector} alt="" /> </a>
                <a className='links' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github1} alt="" />Github <img src={vector} alt="" /> </a>
            </div>
                </section>

            <div className="cards">
                <div className="repo1">
                <div className="cards1">
                <p className='java'>Javacript, React & Node</p>
                <h2 className='farm'>
                FARMA - E-commerce Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
            </div>
            </div>
                <div className="cards1">
                <p className='java2'>HTML, CSS & Bootstrap</p>
                <h2 className='farm'>
                ADVENTOR - Tours & Travel Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
                
            </div>
            </div>
                <div className="cards1">
                <p className='java'>React & Node</p>
                <h2 className='farm'>
                POSTIT - Blog Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
                
            </div>
            </div>
                <div className="cards1">
                <p className='java'>Javacript, React & Node</p>
                <h2 className='farm'>
                FARMA - E-commerce Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
                
            </div>
            </div>
            <div className="cards1">
                <p className='java2'>HTML, CSS & Bootstrap</p>
                <h2 className='farm'>
                ADVENTOR - Tours & Travel Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
                
            </div>
            </div>

            <div className="cards1">
                <p className='java2'>HTML, CSS & Bootstrap</p>
                <h2 className='farm'>
                ADVENTOR - Tours & Travel Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
                
            </div>
            </div>
            </div>
                <div className="repo2">
                <div className="cards1">
                <p className='java'>React & Node</p>
                <h2 className='farm'>
                POSTIT - Blog Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
            </div>
            </div>
                <div className="cards1">
                <p className='java2'>Bootstrap & CSS</p>
                <h2 className='farm'>
                Furns - Landing Page
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
            </div>
            </div>
            <div className="cards1">
                <p className='java2'>HTML, CSS & Bootstrap</p>
                <h2 className='farm'>
                ADVENTOR - Tours & Travel Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
                
            </div>
            </div>
            <div className="cards1">
                <p className='java'>React & Node</p>
                <h2 className='farm'>
                POSTIT - Blog Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
                
            </div>
            </div>
            <div className="cards1">
                <p className='java2'>Bootstrap & CSS</p>
                <h2 className='farm'>
                Furns - Landing Page
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
            </div>
            </div>
            <div className="cards1">
                <p className='java'>Javacript, React & Node</p>
                <h2 className='farm'>
                FARMA - E-commerce Website
                </h2>
                <div className="git">
                <a className='github' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
                <a className='github' href="" target="_blank" rel=""> <img src={world} alt="" />Website<img src={vector} alt="" /> </a>
            </div>
            </div>
            </div>
            </div>

        </main>
        </Container>
    </>
  )
}

export default Projects