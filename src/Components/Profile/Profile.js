import React from "react";
import backgroundImg from "../../assets/images/bg2.jpeg";
import styles from "./Profile.module.css";
import profilePicImg from "../../assets/images/dp.jpeg";
import OwnedNFTCarousel from "./OwnedNFTCarousel";
import ProgressBar from 'react-bootstrap/ProgressBar';
import badgeImg from "../../assets/images/gold.png";
import Header from '../Header';
import { Link } from "react-router-dom";


const Profile = (props) => {
    return (
      <>
        <Header />
        <div className={styles['profile-section']}>
          <div className={styles['background-container']}>
            <img className={styles['background-img']} src={backgroundImg} alt="background" />
          </div>
          <div className={`${styles['profile-container']} mb-2`}>
              <div classNae={styles['profile-top__middle']}>
                <div className={styles['profile-pic-container']}>
                  <img className={styles['profile-pic']} src={profilePicImg} alt="profile" />
                </div>
                <h3 className={styles['profile-name']}>Kartik Bagri</h3>
                <h3 className={styles['location']}>
                <span class={`material-symbols-outlined ${styles['location-icon']}`}>location_on</span>
                  Delhi, India
                </h3>
              </div>
            <div className={styles['profile-top']}>
              <div className={styles['profile-top__left']}>
                <div className={styles['badge-container']}>
                  <img className={styles['badge']} src={badgeImg} alt="badge" />
                </div>
              </div>
              <div className={styles['profile-progress-bar']}>
                <p className={`mb-3 ${styles['progress-text']}`}>Own 2 more NFTs to become <span className="fw-bold">Elite</span> member!</p>
                <ProgressBar striped variant="success" now={60} />
              </div>
            </div>
            <Link to="/mynfts" className={styles['view-all-link']}>View All NFTs</Link>
            <OwnedNFTCarousel nfts={props.nfts}/>
          </div>
        </div>
      </>
    );
}

export default Profile;
