import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl'
import resume_pic from '../images/resume-pic-updated.jpeg'
// import resume from '../docs/final-resume-styled copy.pdf'
import { Link } from 'react-router-dom'
// import pdf from '../..'

// let document = '../docs/final-resume-styled copy.pdf'

class Resume extends Component {
  click() {
    console.log('clicked')
  }
    render () {
        return(
            <div className='resume-grid'>
              <div className='header-div'>
                <h1>Resume</h1>
              </div>
              <div className='resume-img-div'>
                <img className='theResume' src={resume_pic} />
              </div>
              <div className='download-comp'> 
                <Link to='/resume-copy.pdf' target='_blank' download>
                  Download Here!
                </Link>
              </div>
            </div>
        )
    }
}
export default Resume; 