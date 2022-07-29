import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './NFTCard.module.css';

const NFTCard = () => {
    return (
        <div className={styles['nft-card']}>
            <div className={styles['image-container']}>
                <img className={styles['image']} src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="nft" />
            </div>
            <div className={styles['nft-info']}>
                <h3 className={styles['nft-title']}>Most expensive cat</h3>
                <p className={styles['nft-date']}>Owned since 11th January 2021</p>
            </div>
        </div>
    )
}

export default NFTCard;