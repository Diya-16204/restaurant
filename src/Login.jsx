import React from 'react';
import { Link } from 'react-router-dom';
import Email from './Email';
import Password from './Password';
import Submit from './Submit';
import Google from './Google';
import Facebook from './Facebook';

const Login = () => {
  return (
    <div className="hehe">
      <div className="h1">
        <b>Log In</b>
        <Link to="/SignUp" className='a'>Create an Account</Link>
      </div>
      <form method="get">
        <Email place="Email"/>
        <Password place="Password"/>
        <Submit val="Submit" />
        <div className="aayein">
            <a href="#" >Forgot Password</a>
        </div>
      </form>
      <div className="god">
        <Google text='Continue With Google'/>
        <Facebook text='Continue With Facebook'/>
      </div>
    </div>
  );
}

export default Login;
