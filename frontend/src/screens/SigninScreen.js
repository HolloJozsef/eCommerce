import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/userActions';
function SigninScreen(props){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const{loading, userInfo, error}=userSignin;
    const dispatch = useDispatch();

    useEffect(()=>{
      if(userInfo){
          props.history.push("/");
      }
        return()=>{
            //
        };
    },[userInfo])
const SubmitHandler=(e)=>{
    e.preventDefault();
    dispatch(signin(email,password));
}
 
    return <div className="form">
        <form onSubmit={SubmitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
               
                </li>
                <li>
                    <button className="button" type="submit">Sign In</button>
                </li>
                <li>
                    New user?
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create new account</Link>
                </li>
            </ul>
        </form>
    </div>
}
export default SigninScreen;