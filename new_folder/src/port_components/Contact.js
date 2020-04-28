import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <p>Thank you for taking the time to check out my portfolio! If you're interested in working together, please feel free to reach out to me here.</p>
                        
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', color: 'white'}}>
                                        <i className="fa fa-paper-plane" aria-hidden="true"/>
                                        <a href='mailto:cpupo822@gmail.com' target='_blank'>Cpupo822@gmail.com</a>
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', color: 'white'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        https://www.linkedin.com/in/christopher-pupo/
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact; 