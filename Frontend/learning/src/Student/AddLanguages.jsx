import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddLanguages.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddLanguages() {
    const [name2, setName2] = useState('');
    const [email2, setemail2] = useState('');
    const [uname, setUname] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const navigate = useNavigate();
    localStorage.setItem('selectedLanguage', selectedLanguage);

    useEffect(() => {
        let email2 = localStorage.getItem("email");
        setemail2(email2);
        console.log(email2);
        axios.post(process.env.REACT_APP_API_URL +'/getname',{email2})
          .then(response => {
            setName2(response.data);
            setUname(response.data)
            console.log(response.data);
          })
          .catch(error => {
            console.error('THere was an error ', error);
          })
      }, [])

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };
    localStorage.setItem('uname', uname);


    const handleConfirmSelection = () => {
        // Here you can navigate to another route or perform any action with the selectedLanguage
        console.log('Selected Language:', selectedLanguage);
        // Navigate to another page or handle the selected language as needed
        navigate('/req');
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 bg-white">
                        <div className="mt-2 text-center backSTART">
                            <img src="image/images2.png" alt="" className="mt-2" />
                            <h4><b>{name2}</b></h4>
                            <h6 className="pb-3">Student</h6>
                        </div>
                        <hr />
                        <h6 className="mt-4 mb-1">
                            <img src="image/select.png" alt="" className="view mx-2" />
                            <Link to="/addlanguages">Select Language</Link>
                        </h6>
                        <hr />
                        <h6 className="mt-4 active">
                            <img src="image/coursess.png" alt="" className="view mx-2" />
                            <Link to="/presentlearning">Present Learning</Link>
                        </h6>
                        <hr />
                        <h6 className="mt-4">
                            <img src="image/updatedcalendar.png" alt="" className="view mx-2" />
                            <Link to="/studentcalendar">Request Status</Link>
                        </h6>
                        <hr />
                        <h6 className="mt-4">
                            <img src="image/updatedcalendar.png" alt="" className="view mx-2" />
                            <Link to="/addreview">Add Review</Link>
                        </h6>
                        <hr />
                        <h6 className="mt-4">
                            <img src="image/updatedcalendar.png" alt="" className="view mx-2" />
                            <Link to="/">Log Out</Link>
                        </h6>
                        <hr />
                    </div>

                    <div className="col-md-9">
                        <h1 className='mt-4 mb-4 mx-5'><u>Select Languages</u></h1>
                        <div className="container">
                            <div className="row">
                                {/* List of languages */}
                                {['German', 'English', 'Korean', 'Japanese', 'Indonesian', 'French'].map((language) => (
                                    <div className="col-md-4" key={language}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12 text-center border">
                                                    <img 
                                                        src={`image/${language.toLowerCase()}.png`} 
                                                        alt="" 
                                                        className='chapter admin_button mt-2 border border-1' 
                                                    />
                                                    <h1 className='text-center'><b>{language}</b></h1>
                                                    <button 
                                                        className={`btn ${selectedLanguage === language ? 'btn-success' : 'btn-primary'} mb-2 px-4`} 
                                                        onClick={() => handleLanguageSelect(language)}
                                                    >
                                                        {selectedLanguage === language ? 'Selected' : 'Select'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <button 
                                        className="btn btn-primary px-4" 
                                        onClick={handleConfirmSelection} 
                                        disabled={!selectedLanguage}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddLanguages;
