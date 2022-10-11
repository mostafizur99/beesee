import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { css } from '@emotion/react';
import colors from '../../../styles/colors';
import styled from '@emotion/styled';

const CategoryCard = ({ categoryItem }) => {
    return (
        <Col>
            <Card css={custom_card}>
                <Card.Body css={card_body}>
                    <CardTitle>{categoryItem.title}</CardTitle>
                    <CardText>
                        {categoryItem.text}
                    </CardText>
                    <CardButton >
                        <CardButtonText>Explore more</CardButtonText>
                    </CardButton>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CategoryCard

const custom_card = css`
    text-align: center;
    margin-bottom: 30px;
    background: #FFFFFF;
    border: 1px solid ${colors.primaryLight};
    box-sizing: border-box;
    border-radius: 8px;
    transition: .3s;
    &:hover{
        border: 1px solid #3E1E77;
        box-shadow: 0px 24px 40px rgba(26, 26, 26, 0.16);
        }
`;
const card_body = css`
    padding: 43px 24px;
`;
const CardIcon = styled.div`
`;
const CardTitle = styled.p`
    color: ${colors.textColor};
    font-size: 16px;
    line-height: 24px;
    font-weight:500;
    margin: 16px 0 8px 0;
`;
const CardText = styled.p`
    color: ${colors.textColor};
    font-size: 14px;
    line-height: 20px;
    font-weight:400;
    margin: 0 0 16px 0;
`;
const CardButton = styled.button`
    border: none;
    background: transparent;
    padding:0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
const CardButtonText = styled.span`
    color: ${colors.primary};
    line-height: 16px;
    font-size: 12px;
    font-weight: 600;
    margin-right: 8px;
`;