import React from 'react';
import './Services.css'
import videoFile from '../../Assets/video/roVideo.mp4'

const Services = () => {
    return (
        <div className='services'>
            {/* <span> Left side of services</span> */}
            <div className='service-right'>
                <div className='service-video'>
                    <video width='100%' height='100%' loop muted controls>
                        <source src={videoFile} type='video/mp4' />
                    </video>
                </div>
                <div className='service-text'>
                    <h1>Effortless Reverse Osmosis Installation</h1>
                    <h2> Watch and Learn!</h2>
                    <p>Unlock the secrets to flawless reverse osmosis installation with our comprehensive video tutorial. In this step-by-step guide, we demystify the process, ensuring that even beginners can confidently set up their reverse osmosis systems. Clear, concise instructions coupled with visual aids make learning a breeze, empowering you to enhance your water purification system effortlessly. Whether you're a DIY enthusiast or a first-time installer, our video provides invaluable insights to guarantee a successful reverse osmosis installation. Healthier living today!</p>
                </div>
            </div>

        </div>
    );
}

export default Services;
