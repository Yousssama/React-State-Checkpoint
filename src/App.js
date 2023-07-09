import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Oussama Yahya',
      bio: 'I am a React developer.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU',
      profession: 'Junior Software Engineer'
    },
    show: false,
    timeSinceMount: 0
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(this.updateTimeSinceMount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState(prevState => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
  };

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="container">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div className="profile">
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p className="time">Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
