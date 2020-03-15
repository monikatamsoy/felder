import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import Tilt from 'react-parallax-tilt';
import ParallaxHover from '../node_modules/react-parallax-hover/dist/index';
import Hello from './components/Hello';

class ExampleComponent extends Component {
  render() {
    const styles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '2rem',
      color: '#fff',
      height: '100%',
      overflow: 'hidden',
    };

    return (
      <div style={styles}>{this.props.children}</div>
    );
  }
}

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
      {/* <ParallaxHover
            width={200}
            height={200}
            borderRadius={5}
            rotation={9}
            shine={3}
            shadow={9}
            scale={9}
          >
            <Hello />

          </ParallaxHover> */}
           <ParallaxHover width='500' height='300'>
          <img  src='http://lorempixel.com/500/300/abstract/' />
          <h1>Parallax Hover</h1>
        </ParallaxHover>
      </header>
    </div>
  );
}

export default App;
