/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ChefContainer from '../ChefContainer/ChefContainer';
import ExtraSection from '../ExtraSection/ExtraSection';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container>
                <ChefContainer></ChefContainer>
                <ExtraSection></ExtraSection>
                <ExtraSection2></ExtraSection2>
            </Container>
        </div>
    );
};

export default Home;