import React from "react";
import backgroundImg from "../assets/images/bg2.jpeg";
import styles from "./Profile.module.css";
import profilePicImg from "../assets/images/dp.jpeg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Profile = () => {
    return (
      <div className={styles['profile-section']}>
        <div className={styles['background-container']}>
          <img className={styles['background-img']} src={backgroundImg} alt="background" />
        </div>
        <div className={styles['profile-container']}>
          <div className={styles['profile-pic-container']}>
            <img className={styles['profile-pic']} src={profilePicImg} alt="profile" />
          </div>
          <h3 className={styles['profile-name']}>Kartik Bagri</h3>
          <h3 className={styles['location']}>
          <span class={`material-symbols-outlined ${styles['location-icon']}`}>location_on</span>
            Delhi, India
          </h3>
        </div>
      </div>
    );
}

export default Profile;
