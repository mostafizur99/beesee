import styled from '@emotion/styled';
import React from 'react';
import colors from '../../styles/colors';
import Header from '../components/shared/headers/Header';

const Layout = ({ children, title, description }) => {

    return (
        <div>
            <Header />

            <MainArea>{children}</MainArea>

            <p>Footer</p>
        </div>
    );
};

export default Layout;

const MainArea = styled.main`
color: ${colors.textColor};
width: 100%;
`;