import React, { Component } from 'react';
import Container from '../Container/Container';
import './LandingPage.css';
import backgroundImage from '../../images/sand-dunes-desert-night.jpg'

const sectionStyle = {backgroundImage: `url(${backgroundImage})` }

class LandingPage extends Component {
  render() {
    return (
      <div style={sectionStyle} className="LandingPage">
        <Container>
          <h2 className='LandingPage-title'>CLAR<span role='img' aria-label='lightbulb'>💡</span>FY</h2>
          <div className='LandingPage-tagline'>
            <h3>Helping stuck people</h3>
            <h3>take an intentional <span className='LandingPage-tagline--spotlight'>next-step</span></h3>
            <h3>towards a life of more powerful <span className='LandingPage-tagline--spotlight'>personal meaning</span></h3>
          </div>
        </Container>
      </div>
    );
  }
}

export default LandingPage;
