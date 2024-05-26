
import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import Navbar from '../Shared/Navbar/Navbar';
import { firebaseConfig } from './Firebase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            console.log(result);
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, photo: photoURL }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <div className='container-fluid'>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <h1 className='text-center mb-4 mt-5'>Login</h1>
                <div className='row'>
                    <Form.Group controlId="select">
                        <Form.Control as="select" size="lg" placeholder='Country/region' className='col-md-6 offset-md-3' style={{ height: "70px", borderRadius: "10px" }}>
                            <option>Select Country/region</option>
                            <option>Bangladesh(+88)</option>
                            <option>India(+99)</option>
                            <option>Nepal(+87)</option>
                            <option>Pakistan(+25)</option>
                            <option>Bhutan(+66)</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Control className='col-md-6 offset-md-3' style={{ height: "70px", borderRadius: "10px" }} name='phone' type='text' placeholder="Phone" />
                    </Form.Group>
                    <Form.Text className='col-md-6 offset-md-3 fs-4 mb-4' >We'll call or text you to confirm your number. Standard message and data rates apply.</Form.Text>
                    <button onClick={handleGoogleSignIn} style={{ backgroundImage: 'linear-gradient(15deg, #2BDE8C, #57E869)', height: "70px", borderRadius: "10px" }} className="btn text-white fs-4 col-md-6 offset-md-3" type='search'>
                        Continue
                        </button>
                    <Form.Text className='text-center mt-4 fs-4' >Don't have an account? <Link>Sign up</Link> </Form.Text>
                </div>
            </div>
        </div>
    );
};

export default Login;