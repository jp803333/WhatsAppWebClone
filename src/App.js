import React from 'react';
import './App.css';
import LeftSection from './comp/LeftSection/LeftSection';
import RightSection from './comp/RightSection/RightSection';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div className="App" style={{ height: this.state.height -1 ,width:this.state.width}}>
        <LeftSection/>
        <RightSection/>
      </div >
    );
  }
}

export default App;