// Contacts.jsx
import React, { useState } from 'react'
import '../css/Contacts.css'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import img1 from '../assets/images/Vector 1.svg'
import vector from '../assets/images/Vector.svg'
import profile from '../assets/images/profile.svg'
import mail from '../assets/images/mail.svg'
import github1 from '../assets/images/github.svg'
import MessageSent from '../components/MessageSent';

const Contacts = () => {
    const { pathname } = useLocation();
    const [showModal, setShowModal] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const isValid = validateForm(form);

        if (isValid) {
            try {
                await emailjs.sendForm(
                    import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
                    form,
                    import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
                );

                toast.success('Form submitted successfully!');
                form.reset();
                setShowModal(true);
            } catch (error) {
                console.error('Error submitting form:', error);
                toast.error('Error submitting form. Please try again.');
            }
        } else {
            console.log('Form validation failed');
        }
    };

    const validateForm = (form) => {
        let isValid = true;
        const subject = form.elements['subject'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();

        if (subject === '') {
            toast.error('Subject is required');
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ymail\.com|outlook\.com|hotmail\.com|icloud\.com|aol\.com|live\.com|msn\.com|protonmail\.com|zoho\.com|mail\.ru|yandex\.ru)$/i;
        if (email === '') {
            toast.error('Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            toast.error('Invalid email address.');
            isValid = false;
        }

        if (message === '' || message.length < 10 || message.length > 1000) {
            toast.error('Message must be between 10 and 1000 characters');
            isValid = false;
        }

        return isValid;
    };

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
                <Link to='' className='cl'>
                    <img src={mail} alt='' className='c-img' /> Email Me{' '}
                    <img src={vector} alt='' className='c-img' />
                </Link>

                <Link to='' className='cl'>
                    <img src={github1} alt='' className='c-img' /> Github{' '}
                    <img src={vector} alt='' className='c-img' />
                </Link>

            </div>
                </section>
            <div className="send">
                <div className="a">
                <h1 className='message'>Send A Message</h1>
                </div>
            <form onSubmit={handleSubmit}>
                <input className='input' type="text" placeholder='From:' name="form" id="" /> 
                <input className='input1' type="text" placeholder='Subject:' name="subject" id="" />
                <input className='input2' type="text" placeholder='Write message...' name="message" id="" />
          </form>

            <div className="button text-center">
                <button type="submit" >
                    Send Message
                </button>
            </div>
            </div>
        </main>
        </Container>
        <Toaster position='top-center' />
    {showModal && <MessageSent showModal={showModal} setShowModal={setShowModal} />}
</>
  )
}

export default Contacts