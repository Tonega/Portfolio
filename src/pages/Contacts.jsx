// Contacts.jsx
import React from 'react'
import '../css/Contacts.css'
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import img1 from '../assets/images/Vector 1.svg'
import vector from '../assets/images/Vector.svg'
import profile from '../assets/images/profile.svg'
import mail from '../assets/images/mail.svg'
import github1 from '../assets/images/github.svg'

const Contacts = () => {
    const { pathname } = useLocation();

  return (
    <>
        <Container>
        <div className="nav1">
        <a className="brand1" href="/">Tony.</a>
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
            <div className="send">
                <div className="a">
                <h1 className='message'>Send A Message</h1>
                </div>
            <form>
                <input className='input' type="text" placeholder='From:' name="form" id="" /> 
                <input className='input1' type="text" placeholder='Subject:' name="subject" id="" />
                <input className='input2' type="text" placeholder='Write message...' name="subject" id="" />
          </form>

            <div className="button text-center">
                <button type="button" >
                    Send Message
                </button>
            </div>
            </div>
        </main>
        </Container>
    </>
  )
}

export default Contacts