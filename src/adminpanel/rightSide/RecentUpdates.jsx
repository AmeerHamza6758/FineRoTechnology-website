import React from 'react';
import profile from '../../Assets/Images/profile.jpg';
import profil1 from '../../Assets/Images/profile-1.jpg'
import profile2 from '../../Assets/Images/profile-2.jpg'
import './RightSide.css'
import SalesAnalytics from './SalesAnalytics'
import '../../App.css'

const RecentUpdates = ({themeToggle}) => {

    // const [color, setColor]= useState(false)

    // const themeToggle = () => {
    //     setColor(!color)
    //     // setColor((prevColor) => (prevColor === 'dark' ? 'light' : 'dark'));
    //     console.log("Color Function");
    //   };
      

    return (
    
        <div className="right">
            <div className="top">

                <div className="theme-toggler" onClick={themeToggle}>
                    <span className="material-symbols-outlined active">light_mode</span>
                    <span className="material-symbols-outlined">dark_mode</span>
                </div>

                <div className="profile">
                    <div className="info">
                        <p><b>Ameer</b></p>
                        <p>Hamza</p>
                        {/* <small className="text-muted"></small> */}
                    </div>
                    <div className="profile-photo">
                        <img src={profile} alt="Profile Picture" />
                    </div>
                </div>
            </div>

            {/* Recent orders */}
            <div className="recent_updates">
                <h2 >Recent Updates</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            <img src={profil1} alt='Picture' />
                        </div>
                        <div className="message">
                            <p><b>Ameer</b> Received his order of PPF</p>
                        </div>
                    </div>

                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile2} alt='Picture' />
                        </div>
                        <div className="message">
                            <p><b>Ahmed</b> Received his order of UDF</p>
                        </div>
                    </div>

                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile} alt='Picture' />
                        </div>
                        <div className="message">
                            <p><b>Sohail</b> Received his order of RO system</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* Sales Sidex  */}
            <SalesAnalytics/>
        </div>
        // End
    );
}

export default RecentUpdates;
