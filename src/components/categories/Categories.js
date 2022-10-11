import React from 'react'
import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';
import colors from '../../../styles/colors';
import { categoriesData } from '../../datas/categoryDb';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <Section>
            <Container>
                <Row>
                    <Col md={12}>
                        <Header>Search skills by categories</Header>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={4} >
                    {
                        categoriesData.map((category, index) => {
                            return (
                                <CategoryCard categoryItem={category} key={index} />
                            )
                        })
                    }
                </Row>
            </Container>
        </Section>
    )
}

export default Categories

const Section = styled.section`
    padding-bottom: 34px;
    background: #FFFFFF;
`;
const Header = styled.p`
    color: ${colors.textColor};
    font-size: 32px;
    line-height: 48px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 64px;
    /* Mobile Device */
    @media only screen and (max-width:688px) {
        font-size: 24px;
    }
`;