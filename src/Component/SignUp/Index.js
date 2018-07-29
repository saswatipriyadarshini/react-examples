import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import './styles.css';
import {toastr} from 'react-redux-toastr';
import ReactLoading from 'react-loading';
import './styles.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginCreds: {
        email: '',
        password: '',
        phone: '',
        otp: ''
      },
      loginAnimation: '',
      loading: false,
      isAuthenticated: true,
      mode: false,
      visibleOpt: false,
      phoneLoading: false,
      confirmCall: ""
    }
  }

  _handleEnter = () => {
    console.log('Enter');
    this.setState({loginAnimation: 'login-enter'});
  };

  _handleWaypointLeave = () => {
    console.log('hi');
    this.setState({loginAnimation: 'login-leave'});
  };

  componentDidMount = () => {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loading: false
        }, async () => {
          try {
            if (this.state.mode) {
              await addUserIfNot(user);
            }
            this.props.history.push('/');
          } catch (error) {
            console.log(error);
          }
        });
        return true;
      }
      this.setState({isAuthenticated: false});
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe()
  };

  login = async (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const {email, password} = this.state.loginCreds;
    const {signUp, login} = this.props;
    try {
      let status = false;
      if (this.state.mode) {
        status = await signUp(email, password);
      } else {
        status = await login(email, password);
      }

      if (!status) {
        toastr.error('Something went wrong please try again');
        return true;
      }
    } catch (error) {
      this.setState({loading: false}, () => {
        toastr.error(error.message);
      });
      return true;
    }
  };

  phoneVerify = async (event) => {
    event.preventDefault();
    const {phoneNumberVerify, submitOpt} = this.props;
    const {loginCreds, visibleOpt, confirmCall} = this.state;
    this.setState({phoneLoading: true});
    try {
      if (!visibleOpt) {
        const confirmCall = await phoneNumberVerify(loginCreds.phone);
        this.setState({visibleOpt: true, confirmCall: confirmCall});
      } else {
        await submitOpt(loginCreds.otp, confirmCall);
      }
    } catch (error) {
      console.log(error);
      toastr.error('Something went wrong please try again');
    }

    this.setState({phoneLoading: false});
  };

  onChange = (event) => {
    event.preventDefault();
    const creds = Object.assign({}, this.state.loginCreds);
    creds[event.target.name] = event.target.value;
    this.setState({loginCreds: creds});
  };

  modeChange = () => {
    this.setState({mode: !this.state.mode});
  };

  render() {
    const {loginCreds, isAuthenticated, loading, mode, visibleOpt, phoneLoading, loginAnimation} = this.state;
    return (
      <React.Fragment>
        {!isAuthenticated &&
        <div className="container py-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <Waypoint
                topOffset="20%"
                onEnter={this._handleEnter}
                onLeave={this._handleWaypointLeave}
              >
                <div className="card rounded-0">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-6 mx-auto">
                        <h3 className="mb-0 float-left">{mode ? 'SignUp' : 'Login'}</h3>
                      </div>
                      <div className="col-md-6">
                        <button onClick={this.modeChange} type="button"
                                className="btn btn-info float-right">{mode ? 'Login' : 'SignUp'}</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="uname1">Email</label>
                      <input value={loginCreds.email} onChange={this.onChange} name="email" type="email"
                             className="form-control form-control-lg rounded-0"/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" value={loginCreds.password} onChange={this.onChange} name="password"
                             className="form-control form-control-lg rounded-0"/>
                    </div>
                    {loading ?
                      <ReactLoading className="float-right" type="spin" color="#444" height={30} width={30}/> :
                      <button onClick={this.login}
                              className="btn btn-success btn-lg float-right">{mode ? 'SignUp' : 'Login'}</button>}
                  </div>
                </div>
              </Waypoint>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className={loginAnimation + ' ' + 'initial-login'}>
                <div className={"card rounded-0"}>
                  <div className="card-header">
                    <h3 className="mb-0">Verify phone number and login</h3>
                  </div>
                  <div className="card-body">
                    {visibleOpt ? <div className="form-group">
                      <label htmlFor="OPT">OPT</label>
                      <input type="number" value={loginCreds.otp} onChange={this.onChange} name="otp"
                             className="form-control form-control-lg rounded-0"/>
                    </div> : <div className="form-group">
                      <label htmlFor="phone number">Phone</label>
                      <input value={loginCreds.phone} onChange={this.onChange} name="phone" type="text"
                             className="form-control form-control-lg rounded-0"/>
                    </div>}
                    {phoneLoading ?
                      <ReactLoading className="float-right" type="spin" color="#444" height={30} width={30}/> :
                      <button onClick={this.phoneVerify}
                              className="btn btn-success btn-lg float-right">Submit</button>}
                  </div>
                  <div id="login-in-button"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
        <div className='test'>Hello</div>
      </React.Fragment>
    );
  }
}

export default Login;