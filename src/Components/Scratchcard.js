import React from 'react';
import ScratchCard from 'react-scratchcard-v2';
import scratchImg from '../assets/images/background.png';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import scratchBgImg from '../assets/images/scratch_bg.jpeg';

const Scratch = (props) =>
    <ScratchCard
        width={370}
        height={226}
        image={scratchImg}
        finishPercent={80}
        onComplete={() => console.log('complete')}
    >
        <div style={{
        margin: 'auto',
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url(' + scratchBgImg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}
        >
        <h1 style={{color: 'white', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center'}}>{props.prize}</h1>
        </div>
    </ScratchCard>

const Scratchcard = () => {
    const prizes=['Flipkart Rs. 100 Voucher', 'Flipkart Rs. 1000 Voucher', 'Flipkart Rs. 500 Voucher'];
    return (
    <>
        <Header />
        <Container fluid className="m-0 w-100 pt-5" style={{background: 'linear-gradient(to left, #182848, #4b6cb7)', minHeight: '92vh'}}>
            {/* <h1 className="text-bold">You have the following Scratch Card(s):</h1> */}
            <Row style={{alignItems: 'center'}}>
                {prizes.map((prize, index) => (
                    <Col key={index}>
                        <Scratch prize={prize} />
                    </Col>
                ))}
            </Row>
        </Container>
    </>
    );
}

export default Scratchcard;