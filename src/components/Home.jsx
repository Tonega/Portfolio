import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './NavBar';
import '../css/Home.css'
import pic from '../assets/images/SALY-13.png'
import BOOTSTRAP from '../assets/images/Bootstrap.svg'
import NODE from '../assets/images/Node.svg'
import HTML from '../assets/images/HTML.svg'
import JS from '../assets/images/JS.svg'
import REACT from '../assets/images/React.svg'
import CSS from '../assets/images/CSS.svg'
import profile from '../assets/images/profile.svg'
import mail from '../assets/images/mail.svg'
import github from '../assets/images/github.svg'
import vector from '../assets/images/Vector.svg'

const Home = () => {
    return (
        <>
            <Container>

            <Navbar />

            <main className='head'>
                <section className='header'>
                    <h1 className='full'>Full Stack Developer</h1>
                    <p className='name'>Egbah Anthony</p>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
                    <div className="list">
                        <img src={BOOTSTRAP} alt="" />
                        <img src={NODE} alt="" />
                        <img src={HTML} alt="" />
                        <img src={JS} alt="" />
                        <img src={REACT} alt="" />
                        <img src={CSS} alt="" />
                    </div>
                    <div className="link">
                <img className='profile' src={profile} alt="" />
                <a className='links' href="mailto:thonieetega182@gmail.com" target="_blank" rel=""> <img src={mail} alt="" />Email me <img src={vector} alt="" /> </a>
                <a className='links' href="https://github.com/Tonega" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
            </div>
                </section>
                <div className="image">
                        <img src={pic} alt="" />
                    </div>
            </main>
            </Container>
        </>
    )
}

export default Home;