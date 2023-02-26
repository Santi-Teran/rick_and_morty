import React, { useState } from 'react';
import { validate } from './validation.js';
import style from './Form.module.css'

export default function Form({login}) {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(validate(userData));
};

const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    login(userData);
  }

  return (
      <form className={style.div} onSubmit={handleSubmit}>
        <h1>Rick and Morty Cards</h1>
        <input 
            className={errors.username ? 'danger': ''}
            name="username" 
            value={userData.username} 
            placeholder="Username" 
            onChange={handleChange} 
        />
        {errors.username && <span className={style.errors}>{errors.username}</span>}
        
        <input
            className={errors.password ? 'danger': ''}
            name="password" 
            value={userData.password} 
            placeholder="Password" 
            type="password" 
            onChange={handleChange}
        />
        {errors.password && <span className={style.errors}>{errors.password}</span>}
        
        <button type="submit">Log In</button>
      </form>
    );
}
