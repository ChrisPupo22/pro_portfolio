import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import portfolio_pic from '../images/portfolio_pic.png'

class LandingPage extends Component {
    render() {
        return(
            <div className='landing-page-comp' style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src={portfolio_pic}
                            alt='picture of Christopher Pupo'
                            className='port-img'
                        />
                        <div className="banner-text">
                            <h1>Christopher Pupo</h1>
                            <h2>Full Stack Software Engineer</h2>

                        <hr/>

                        <p>HTML/CSS | React | Python | Javascript | Java | Spring | </p>

                        <div className="social-links">

                            {/* LinkedIn link*/}
                            <a href="" rel="noopener noreferrer"  target="_blank">
                                <i className= "fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/* Github link*/}
                            <a href="" rel="noopener noreferrer"  target="_blank">
                                <i className= "fa fa-github-square" aria-hidden="true"/>
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )  
    }
}

export default LandingPage
   
