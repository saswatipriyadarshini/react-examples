import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
import './style.css';


class Clicker extends Component{
  constructor(props){
    super();
    this.state ={
      count: props.count
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount(){
    this.setState((preState) => ({count: preState.count + 1}));
    console.log('Happening');
  }
  resetCount(){
    this.setState(() => ({count: 0}));
    console.log('jkf');
  }
  decrementCount(){
    this.setState((preState) => ({count: preState.count - 1}));
    console.log('somehting');
  }

  render(){
    return(
      <div className='container'>
        <div className='clicker border border-secondary rounded'>
          <div className='clicker-display d-flex align-items-center bg-light text-secondary'>
            <div className="mx-auto display-1">{this.state.count}</div>
          </div>
          <div className="clicker-button-panel d-flex flex-row">
            <button className="btn btn-success w-100" onClick={this.incrementCount}>
              <i className="fa fa-plus fa-2x"></i>
            </button>
            <button className="btn btn-warning w-100" onClick={this.resetCount}>
              <i className="fa fa-refresh fa-2x"></i>
            </button>
            <button className="btn btn-danger w-100" onClick={this.decrementCount}>
              <i className="fa fa-minus fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Clicker.defaultprops ={
  count: 0
}

Clicker.propTypes = {
  count: PropTypes.number
};


export default Clicker;