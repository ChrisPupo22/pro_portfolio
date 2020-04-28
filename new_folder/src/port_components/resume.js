import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl'
import resume_pic from '../images/resume_img.jpg'
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
                <img className='theResume' src={resume_pic} />
                {/* <Link download='' to='../docs/final-resume-styled copy.pdf' target='_blank'> Download Resume</Link> */}
                <Link onClick={this.click} to='/final-resume-styled.pdf' download>Download Resume</Link>
                <div onClick={this.click}>Button</div>
            </div>
        )
    }
}
export default Resume; 