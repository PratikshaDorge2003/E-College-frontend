import React, { useEffect, useState } from 'react'
import Navbar from './Navbar1';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/list-files')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setFiles(data)
            })
            .catch(error => {
                console.error('Error fetching files:', error);
            });

    }, [])


    return (

        <div>
            <Navbar />
            <div className='HeaderImage'></div>
            
           
            <div className='HomePageDetails'>
                <div className='centerized Title'><h2>Government College of Engineering, Chhatrapati SambhajiNagar</h2></div>
                <p className='HomePageInfo'>Institute where academic excellence is coupled with a commitment to
                    maintaining a disciplined environment conducive to learning and personal growth.
                    Our institution upholds a set of strict discipline rules and regulations to ensure the safety,
                    well-being, and academic progress of all students.
                    These guidelines encompass punctuality, respect for faculty and peers,
                    adherence to academic integrity, and responsible conduct on campus premises. Through the
                    enforcement of these regulations, we foster a culture of professionalism, integrity,
                    and mutual respect, empowering our students to excel both academically and personally.</p>


                <p className='HomePageInfo'>Alongside academic pursuits, we prioritize the holistic
                    development of our students, nurturing qualities of <b>leadership, teamwork, and
                        ethical responsibility.</b> Through regular communication and transparent
                    enforcement of policies, we create a supportive environment where every
                    individual can thrive academically, socially, and personally.
                    At our college, discipline is not merely a
                    restriction but a pathway to success and excellence in all endeavors.</p>
                <div>

                </div>
                <div className='SiteFeature'>
                    <div className='features centerized '>
                        <img className="Icon" src="/academic.png" alt="academic Icon"></img>
                        <h5>Academic Excellence</h5>
                        <p className='featuresInfo'>Critical thinking, innovation, and problem-solving skills across various disciplines, ensuring students are well-prepared for the challenges of the modern world</p>
                    </div>
                    <div className='features centerized'>
                        <img className="Icon" src="/research.png" alt="research Icon"></img>
                        <h5>Research and Innovation</h5>
                        <p className='featuresInfo'>Strive to be a hub of cutting-edge research and innovation, encouraging both faculty and students to engage in groundbreaking research projects</p>
                    </div>
                    <div className='features centerized '>
                        <img className="Icon" src="/Social.png" alt="social Icon"></img>
                        <h5>Holistic Development</h5>
                        <p className='featuresInfo'> We are committed to the development of our students by providing opportunities for personal growth, leadership development, and extracurricular involvement</p>
                    </div>
                    <div className='features centerized'>
                        <img className="Icon" src="/development.png" alt="holistic icon"></img>
                        <h5>Social Responsibility</h5>
                        <p className='featuresInfo'>We aim to instill a sense of social responsibility and civic engagement in our students, encouraging them to use their skills and knowledge to positively impact their communities </p>
                    </div>

                </div>


            </div>
            <div className='documentsContainer centerized'>
                <h4 className='docTitle'>NOTICE AND IMPORTANT DOCUMENTS</h4>
                <ul>
                    {files.length>0? files.map(file => (
                        <li key={file}>
                           <div style={{display:"flex"}}>
                           <p className='documents'>{file}</p><a href={`http://localhost:3002/download/${file}`} download >DOWNLOAD</a>
                           </div>
                        </li>
                    )) :<p className='documents'> No current notices and any documents</p>}
                </ul>
            </div>
           

            <div className='ContactUs'>
                <div className='ContactUsInfo'>
                    <h5 style={{ color: "white" }}>Contact Us :</h5>
                    <ul className='ContactList'>
                        <li><Link><img className='profileIcon' src="./instagram.png" alt="Instragram logo" /></Link></li>
                        <li><Link><img className='profileIcon' src="./linkedIn.png" alt="LinkedIn logo" /></Link></li>
                        <li><Link><img className='profileIcon' src="./twitter.png" alt="Twitter logo" /></Link></li>

                        <li><Link><img className='profileIcon' src="./facebook2.png" alt=" Facebook logo" /></Link></li>
                    </ul>
                </div>



            </div>
        </div>

    )
}

export default HomePage