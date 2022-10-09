import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className='register-page'>
      <RegisterInput register={onRegisterHandler} />
    </section>
  )
}

export default RegisterPage;