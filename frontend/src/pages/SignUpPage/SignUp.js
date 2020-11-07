import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { mask, unMask } from 'remask';
import axios from 'axios';
import api from '../../services/api';
import {
  SignUpPageSection,
  SignUpContainer,
  SignUpLogo,
  SignUpForm,
  SignUpControl,
  SignUpSubmit,
  SignUpRow,
  SignUpSignIn,
} from './SignUpStyled';
import { CgArrowLongRight } from 'react-icons/cg';
import { GlobalStyle } from '../../GlobalStyled';
import NetflixLogo from '../../assets/netflix-logo.png';

export const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [images, setImages] = useState([]);
  const history = useHistory();

  const maskCpf = ev => {
    setCpf(mask(unMask(ev.target.value), [
        '999.999.999-99'
      ]
    ));
  };

  const maskCep = ev => {
      setCep(mask(unMask(ev.target.value), [
        '99999-999'
      ]
    ));
  };

  const autoCompleteData = (ev) => {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, '');

    if(cep?.length !== 8) {
      return;
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setNeighborhood(response.data.bairro);
        setStreet(response.data.logradouro);
      })
  }

  const handleInputFileImages = (ev) => {
    if(!ev.target.files) {
      return;
    }

    const selectedImages = Array.from(ev.target.files);
    setImages(selectedImages);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('cpf', cpf);
    data.append('postal_code', cep);
    data.append('neighborhood', neighborhood);
    data.append('street', street);
    images.forEach(image => {
      data.append('images', image)
    })

    await api.post('/users/create', data);
    alert('Cadastro realizado com sucesso');
    history.push('/users/login');
  };

  return (
    <SignUpPageSection>
      <GlobalStyle />
      <SignUpContainer>
        <SignUpLogo>
          <Link to="/">
            <img src={NetflixLogo} alt="Netflix" />
          </Link>
        </SignUpLogo>
        <SignUpForm onSubmit={handleSubmit}>
          <SignUpControl>
            <SignUpRow>
              <label htmlFor="photo" className="file">Escolha uma foto de perfil...</label>
              <input
                type="file"
                name="photo" 
                id="photo"
                multiple
                onChange={handleInputFileImages}
              />
            </SignUpRow>
            <SignUpRow>
              <label htmlFor="name">Nome*</label>
              <input
                type="name"
                name="name"
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Digite seu nome completo"
                autoComplete="off"
              />
            </SignUpRow>
          </SignUpControl>
          <SignUpControl>
            <SignUpRow>
              <label htmlFor="email">E-mail*</label>
              <input
                type="email"
                name="email"
                id="email"
                value={autoCompleteData.logradouro}
                onChange={event => setEmail(event.target.value)}
                placeholder="Digite seu e-mail"
                autoComplete="off"
              />
            </SignUpRow>
            <SignUpRow>
              <label htmlFor="password">Senha*</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Digite sua senha secreta"
                autoComplete="off"
              />
            </SignUpRow>
          </SignUpControl>
          <SignUpControl>
            <SignUpRow>
              <label htmlFor="cpf">CPF*</label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                value={cpf}
                onChange={event => setCpf(event.target.value)}
                onKeyPress={maskCpf}
                maxLength="14"
                placeholder="Digite seu CPF"
                autoComplete="off"
              />
            </SignUpRow>
            <SignUpRow>
              <label htmlFor="cep">CEP*</label>
              <input
                type="text"
                name="cep"
                id="cep"
                onKeyPress={maskCep}
                onKeyUp={autoCompleteData}
                value={cep}
                onChange={event => setCep(event.target.value)}
                maxLength="9"
                placeholder="Digite seu código postal"
                autoComplete="off"
              />
            </SignUpRow>
          </SignUpControl>
          <SignUpControl>
            <SignUpRow>
              <label htmlFor="neighborhood">Bairro*</label>
              <input
                type="text"
                name="neighborhood"
                id="neighborhood"
                value={neighborhood}
                onChange={event => setNeighborhood(event.target.value)}
                autoComplete="off"
                disabled
              />
            </SignUpRow>
            <SignUpRow>
              <label htmlFor="street">Rua*</label>
              <input
                type="text"
                name="street"
                id="street"
                value={street}
                onChange={event => setStreet(event.target.value)}
                autoComplete="off"
                disabled
              />
            </SignUpRow>
          </SignUpControl>
          <SignUpSignIn>
            <Link to="/users/login">Fazer login</Link>
          </SignUpSignIn>
          <SignUpSubmit>
            <button><CgArrowLongRight size={20} /></button>
          </SignUpSubmit>
        </SignUpForm>
      </SignUpContainer>
    </SignUpPageSection>
  );
};

export default SignUpPage;