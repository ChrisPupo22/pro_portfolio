import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import LandingPage from './landing_page'

export default function NavBar () {
   return <div className='navbar-style'>
            <Layout fixedHeader>
                <Header className='header-color' title={<span><span style={{ color: '#ddd' }}> </span><Link to='/'><strong>Home</strong></Link></span>}>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/about">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Portfolio">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/about">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
        </div>
};