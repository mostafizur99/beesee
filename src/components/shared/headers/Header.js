import React from 'react'
import Link from 'next/link';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Container, Nav, Navbar } from 'react-bootstrap';
import colors from '../../../../styles/colors';
import { mainNavData } from '../../../datas/mainNavDb';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" css={nav_custom} sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <LogoText>
                            Bee<LogoColor>seE</LogoColor>
                        </LogoText>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end align-items-center">
                        <Nav>
                            {
                                mainNavData?.map((navItem, index) => {
                                    return (
                                        <Link key={index} href={navItem?.link} passHref>
                                            <ItemText>
                                                {navItem?.title}
                                            </ItemText>
                                        </Link>
                                    )
                                })
                            }

                            <Link href="/" passHref>
                                <ButtonNav>
                                    Join Now
                                </ButtonNav>
                            </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header

// ===========css starts===============
const nav_custom = css`
background: #FFFFFF;
font-family: 'Montserrat', sans-serif;
padding: 14px 0;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const LogoText = styled.h3`
`;
const ItemText = styled.a`
    font-weight: 700;
    font-size: 15px;
    color: ${colors.textColor};
    display: block;
    padding: 10px 25px;
    margin: auto 0;
    text-decoration: none;
    transition: .4s;
    &:hover {
        background:${colors.themePrimary};
        color: #FFFFFF;
    }
`;
const LogoColor = styled.span`
    color: ${colors.themeSecondary};
}
`;
const ButtonNav = styled.a`
padding: 10px 24px;
background:${colors.themeSecondary};
border-radius: 4px;
text-decoration: none;
font-weight: 600;
font-size: 14px;
color: #FFFFFF;
margin-left: 30px;
transition: .3s;
    &:hover {
        background:${colors.themePrimary};
        color: #FFFFFF;
    }
    /* Mobile Device */
    @media only screen and (max-width:688px) {
        margin-left: 0px;
    }
`;
// ===========css Ends===============