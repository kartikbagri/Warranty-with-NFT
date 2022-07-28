import React from "react";
import backgroundImg from "../../assets/images/bg2.jpeg";
import styles from "./Profile.module.css";
import profilePicImg from "../../assets/images/dp.jpeg";
import OwnedNFTCarousel from "./OwnedNFTCarousel";
import { Link } from "react-router-dom";


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
          <Link to="/" className={styles['view-all-link']}>View All NFTs</Link>
          <OwnedNFTCarousel />
        </div>
      </div>
    );
}

export default Profile;
