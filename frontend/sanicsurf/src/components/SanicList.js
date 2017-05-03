import React, {Component} from 'react';
//import {Redirect} from 'react-router';
//import SanicProfile from './SanicProfile';
import Sanic from './Sanic';

class SanicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenSanic: 'sanic'
    }
}
updateSanic(data){
  this.setState({
    chosenSanic: data
  })
  console.log('chosen sanic', this.state.chosenSanic)
}

changeSanic(){
  this.props.changeSanic(this.state.chosenSanic)
}

componentWillMount() {
  console.log('all sanics:', this.props.allSanics)
}
  render() {
    console.log('SanicList loaded');
    const sanics = this.props.allSanics.map((sanic, i) => {
    return <Sanic key={i} imageUrl={sanic.url} name={sanic.name} />;
    });
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="sanic-select-mobile">
          <div className="row">
            {sanics[0]}{sanics[1]}
          </div>
          <div className="row">
            {sanics[2]}{sanics[3]}
          </div>
          <div className="row">
            {sanics[4]}{sanics[5]}
          </div>
        </div>
      )
    } else {
      return (
        <div className="sanic-select col-md-8">
          <div className="row">
            {sanics[0]}
            {/*<button onClick={this.updateSanic.bind(this)}>hello</button>*/}
            <div>{sanics[1]}</div>
            <div>{sanics[2]}</div>
          </div>
          <div className="row">
            {sanics[3]}{sanics[4]}{sanics[5]}
          </div>
          <button onClick={this.changeSanic.bind(this)}>hey</button>
        </div>
      )

    }
  }
}

export default SanicList;