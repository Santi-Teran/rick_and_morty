import { useState } from 'react';
import { validate } from './validation.js';
import style from './Form.module.css'

export default function Form(props) {

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setUserData({...userData, [name]: value})

    setErrors(validate({...userData, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.login(userData)
  }

  return (
    <div className={style.container}>
      <h1>Rick and Morty Cards</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          name="username"
          type="text"
          value={userData.username}
          onChange={handleChange}
          className={errors.username && 'danger'}
        />
        <span className={style.errors}>{errors.username && errors.username}</span>

        <label>Password</label>  
        <input
          name="password"
          type="password" 
          value={userData.password} 
          onChange={handleChange}
          className={errors.password && 'danger'}
        />
        <span className={style.errors}>{errors.password && errors.password}</span>
        
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
