import React from 'react'
import { Button } from 'react-bootstrap';
import Header from './Header';
import styles from './NftDetails.module.css';

const NftDetails = (props) => {
    console.log("In NftDetails");
    console.log(props.nft);
    const nft = props.nft;
    return (
        <>
            <Header />
            <div className={styles['nft-details-section']}>
                <div className={`${styles['top-container']} mt-5`}>
                    <div className={styles['image-container']}>
                        <img src={nft['image_url']} className={styles['image']} alt='image'></img>
                    </div>
                </div>
                <div className={`${styles['middle-container']} mt-5`}>
                    <div className={styles['container']}>
                        <h1 className={styles['title']}>{nft.name}</h1>
                        <h3 className={styles['field']}>{nft.collection.name}</h3>
                        <hr className={styles['collection-name']}></hr>
                        <p className={styles['field']}>Owned by <span className="text-primary">{nft.creator.user.username}</span></p>
                        <p className={styles['field']}>Created on: {nft['asset_contract']['created_date'].substring(0, 10)}</p>
                        {(5 - nft['num_sales']) ?<p className={styles['field']}>This item can be sold {5 - nft['num_sales']} more times</p>: <p className={styles['field']}>This item cannot be sold.</p>}
                        <p className={styles['field']}>6 months warranty left</p>
                        <h3 className={styles['price']}>$ {nft['asset_contract']['opensea_seller_fee_basis_points'].toFixed(2)}</h3>
                        <Button className={styles['btn']} href={nft['permalink']} target="_blank" variant='outline-primary'>Trade</Button>
                        <Button className={`${styles['btn']} ${styles['warranty-btn']} bg-primary`} href={nft['permalink']} target="_blank" variant='primary'>Claim Warranty</Button>
                    </div>
                    <div className={styles['container']}>
                        <h1 className={styles['title']}>Description</h1>
                        <p className={styles['field']}>{nft['description']}</p>
                    </div>
                    <div className={styles['container']}>
                        <h1 className={styles['title']}>Specifications</h1>
                        {nft['traits'].map((trait) => {
                            return <p className={styles['field']} key={trait['trait_type']}>{trait['trait_type']}: {trait['value']}</p>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NftDetails;