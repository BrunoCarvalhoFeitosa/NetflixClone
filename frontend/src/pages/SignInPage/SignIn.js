import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  SignInPageSection,
  SignInContainer,
  SignInLogo,
  SignInForm,
  SignInControl,
  SignInSubmit,
  SignInForgotPass,
} from './SignInStyled';
import { CgArrowLongRight } from 'react-icons/cg';
import { GlobalStyle } from '../../GlobalStyled';
import NetflixLogo from '../../assets/netflix-logo.png';
import api from '../../services/api';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      api.get('/users/login').then(response => {
        response.data.forEach((item) => {
          if(item.email === email && item.password === password) {
            localStorage.setItem('emailUser', email);
            history.push('/');
            return;
          } else {
            return console.error('Dados incorretos, tente novamente.');
          }
      });
      }) 
    } catch(error) {
      console.error('Login error', error);
      return alert('Erro ao requisitar os dados, tente novamente');
    }
  }

  return (
    <SignInPageSection>
      <GlobalStyle />
      <SignInContainer>
        <SignInLogo>
          <Link to="/">
            <img src={NetflixLogo} alt="Netflix" />
          </Link>
        </SignInLogo>
        <SignInForm onSubmit={handleSubmit}>
          <SignInControl>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
              autoComplete="off" 
            />
          </SignInControl>
          <SignInControl>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="Digite sua senha secreta"
            />
          </SignInControl>
          <SignInForgotPass>
            <Link to="recover/password">Esqueci minha senha</Link>
          </SignInForgotPass>
          <SignInSubmit>
            <button><CgArrowLongRight size={20} /></button>
          </SignInSubmit>
        </SignInForm>
      </SignInContainer>
    </SignInPageSection>
  );
};

export default SignInPage;