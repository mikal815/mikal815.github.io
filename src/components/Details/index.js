import React from 'react'
import styled from 'styled-components';
import Logo from '../Logo';
import Sidebar from '../Menu';

const Layout = styled.div`
    background-color: #27292b;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: 100%;
    right: 0;
    left: 0;
`

export default function Details() {
    return (
        <Layout>
            <Logo />
            <Sidebar />

        </Layout>
    )
}
