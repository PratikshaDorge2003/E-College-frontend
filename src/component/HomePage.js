import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar1';

const Register = (props) => {



    return (

        <div>
            <Navbar />
            <div className='HeaderImage'></div>
            <div className='HomePageDetails'>
                <div className='centerized Title'><h2>Welcome To E-Waste Central</h2></div>
                <p className='HomePageInfo'>The surge e-waste poses a host of pressing issues with
                    far-reaching consequences.
                    Improper disposal of electronic devices often results in hazardous environment.
                    Municipalities and recycling facilities struggle to cope with the sheer volume
                    of discarded electronics,
                    leading to inadequate disposal methods that further harm the environment.</p>


                <p className='HomePageInfo'>To solve such issues here is <b>E-Waste Central </b> website that connects users
                    with e-waste recycling vendors, provides a platform for the sale of recycled
                    and refurbished products, and allows users to track the e-waste recycling and
                    refurbishment process. It is a comprehensive e-waste management platform that
                    provides a number of benefits to both users and vendors. E-Waste Central helps to reduce the amount of
                    e-waste that goes to landfill and promotes the sustainable use of resources.</p>
                <div>
                </div>
                <div className='SiteFeature'>
                       <div className='features centerized'>
                        <img className="Icon" src="/leafIcon.png"></img>
                        <h5>Green Gurantee</h5>
                        <p className='featuresInfo'>Our prime objective is to reduce the environmental impact posed by your e-waste. 
                        Thus, we establish practices to ensure safe recycling and effective disposal</p>
                       </div>
                       <div className='features centerized'>
                       <img className="Icon" src="/cashIcon.png"></img>
                       <h5>Right Price For Right Scrap</h5>
                       <p className='featuresInfo'>Don't settle for low prices because you want your property clean. Perfect platform for proper e-waste disposal and to get the right price for the right scrap.</p>
                       </div>
                       <div className='features centerized'>
                       <img className="Icon" src="/TickMarkIcon.png"></img>
                       <h5>Comfort and Covenience</h5>
                       <p>Schedule a pickup of your convenience. Ensure timely scrap removal from your home or office. Covenient way to sell and buy the scrap</p>
                       </div>
                       <div className='features centerized'>
                       <img className="Icon" src="/Security.png"></img>
                        <h5>Security Measures</h5>
                        <p>We protect your data and ensures safety. All the information you share with us is encrypted and cannot be intercepted by malicious third parties.</p>
                       </div>
                      
                </div>
               

                </div>

                <div className='ContactUs'>
               


            </div>
        </div>

    )
}

export default Register