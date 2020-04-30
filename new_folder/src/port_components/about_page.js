import React, { Component } from 'react'

class About extends Component {
    render() {
        return(
            <div className='about-page'>
                <h1>About Me</h1>
                {/* icons reflecting strengths: team-player, efficiency, communication, clean-code */}
                <div className='icon-and-description'>
                    <div className='about-icons'>
                        <div className='about-cards'>
                            <i class='fa fa-users'></i>
                            <p >Positive & effective team-player</p>
                        </div>
                        <div className='about-cards'>
                            <i class='fa fa-crosshairs'></i>
                            <p>Efficient and detail oriented</p>
                        </div>
                        <div className='about-cards'>
                            <i class='fa fa-comments'></i>
                            <p>Active communicator</p>
                        </div>
                        <div className='about-cards'>
                            <i class='fa fa-code'></i>  
                            <p>Clean and intuitive code</p>
                        </div>

                    </div>
                    {/* <div className='icon-descriptions'>
                        <p id='test1'>Positive & effective team-player</p>
                        <p>Efficient and detail oriented</p>
                        <p>Active communicator</p>
                        <p>Clean and intuitive code</p>
                    </div> */}
                </div>
                <div className='character-description'>
                    <p>
                    Hello I am Christopher Pupo, and I am a Full Stack Software Engineer living in
                    South Florida. I am extremely passionate about coding and love to learn.{"\n"}
                    Finding creative solutions to unique software problems and taking on new challenges
                    are the most exciting part of my day!
                    </p>
                </div>
            </div>
        )
    }
}

export default About; 