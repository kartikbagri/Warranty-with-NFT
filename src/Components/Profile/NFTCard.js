import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './NFTCard.module.css';

const NFTCard = (props) => {
    return (
        <div className={styles['nft-card']}>
            <div className={styles['image-container']}>
                <img className={styles['image']} src={props.nft.image_url} alt="nft" />
            </div>
            <div className={styles['nft-info']}>
                <h3 className={styles['nft-title']}>{props.nft.name}</h3>
                <p className={styles['nft-date']}>Owned since {props.nft['asset_contract']['created_date'].substring(0, 10)}</p>
            </div>
        </div>
    )
}

export default NFTCard;