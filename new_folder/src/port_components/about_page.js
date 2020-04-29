import React, { Component } from 'react'

class About extends Component {
    render() {
        return(
            <div className='about-page'>
                <h2>About Me</h2>
                {/* icons reflecting strengths: team-player, efficiency, communication, clean-code */}
                <div className='about-icons'>
                    <i class='fa fa-users'></i>
                    <i class='fa fa-crosshairs'></i>
                    <i class='fa fa-comments'></i>
                    <i class='fa fa-code'></i>
                </div>
                <p>Hello I am Christopher Pupo, and I'm a Full Stack Software Engineer living in
                    South Florida.I am extremely passionate about coding and love to learn.{"\n"}
                    Finding creative solutions to unique software problems and taking on new challenges
                    are the most exciting part of my day!
                </p>
            </div>
        )
    }
}

export default About; 