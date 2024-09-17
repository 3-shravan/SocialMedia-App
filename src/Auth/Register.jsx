import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';



const USER_REGEX = /^[a-zA-Z0-9]{4,16}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

const Register = () => {
  const navigate=useNavigate();
  const userRef = useRef();

 
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
 

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);


 
  useEffect(() => {
    userRef.current.focus();
  }, []);


  useEffect(() => {
    
    setValidName(USER_REGEX.test(user));
  }, [user]);


  useEffect(() => {
    
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validName && validPwd) {
      toast.success('Registration Successful!');
      setUser("");
      setPwd("");
      navigate("/login");
    } else {
      toast.error('Invalid inputs!');
    }
    

    /*
    try {
      const response = await axios.post('/register', {
        username: user,
        password: pwd
      });
      console.log(response.data);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setErrMsg('Registration Failed');
      errRef.current.focus();
    }
    */
    
    
  };

  return (
    <section>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <span className={validName ? "valid" : "invalid"}>✓</span>
      </label>
      <input
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
      />

      <label htmlFor="password">
        Password:
        <span className={validPwd ? "valid" : "invalid"}>✓</span>
      </label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
      />

      <button disabled={!validName || !validPwd}>Register</button>
    </form>
  </section>
  );
};

export default Register;
