import React from 'react'
import { Button } from 'react-bootstrap';
import Header from './Header';
import styles from './NftDetails.module.css';

const NftDetails = (props) => {
    console.log("In NftDetails");
    console.log(props.nft);
    const nft = props.nft;
    let priceItem, warrantyItem, validTillItem
    {
        nft['traits'].map((trait) => {
            if (trait['trait_type'] == 'Price') {
                priceItem = trait['value'];
            }
            else if (trait['trait_type'] == 'Warranty') {
                warrantyItem = trait['value'];
            }
            else if (trait['trait_type'] == 'Valid Till') {
                validTillItem = trait['value'];
            }
        })
    }
    const isInWarranty = (warrantyItem != 0);
    const warrantyText = isInWarranty ? `${warrantyItem} warranty left` : "Warranty Expired";
    const reSaleText = isInWarranty ? `This NFT has been resold ${nft.num_sales} times` : "Cant be resold"
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
                        {/* {(5 - nft['num_sales']) ?<p className={styles['field']}>This item can be sold {5 - nft['num_sales']} more times</p>: <p className={styles['field']}>This item cannot be sold.</p>} */}
                        <p className={`${styles['field']} ${isInWarranty ? '' : 'text-danger'}`} > {warrantyText} </p>
                        <p className={`${styles['field']} ${isInWarranty ? '' : 'text-danger'}`}> {reSaleText} </p>
                        <h3 className={styles['price']}> Rs. {priceItem}</h3>
                        <Button className={styles['btn']} href={nft['permalink']} disabled={!isInWarranty ? true : false} target="_blank" variant='outline-primary'>Trade</Button>
                        <Button className={`${styles['btn']} ${styles['warranty-btn']} bg-primary`} disabled={!isInWarranty ? true : false} href="https://www.flipkart.com/" target="_blank" variant='primary'>Claim Warranty</Button>
                    </div>
                    <div className={styles['container']}>
                        <h1 className={styles['title']}>Description</h1>
                        <p className={styles['field']}>{nft['description']}</p>
                    </div>
                    <div className={styles['container']}>
                        <h1 className={styles['title']}>Specifications</h1>
                        <p className={styles['field']} key={nft.id}>Id: {nft.id}</p>
                        {nft['traits'].map((trait) => {
                            if (trait['trait_type'] == 'Price' || trait['trait_type'] == 'Warranty') return;
                            return <p className={styles['field']} key={trait['trait_type']}>{trait['trait_type']}: {trait['value']}</p>
                        })}
                        
                    </div>
                    <div className={styles['container']}>
                        <Button className={styles['btn']} href={nft['permalink']} disabled target="_blank" variant='outline-primary'>Previous Transcation</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NftDetails;