import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterWrapper,
  FooterHeader,
  FooterItem,
  FooterUl,
  FooterTitle,
  FooterLi
} from './FooterStyled';
import NetflixLogo from '../../../assets/netflix-logo.png';

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterHeader>
          <Link to="/">
            <img src={NetflixLogo} alt="Netflix" />
          </Link>
        </FooterHeader>
      <FooterWrapper>
        <FooterItem>
          <FooterUl>
            <FooterTitle>Categorias</FooterTitle>
            <FooterLi>Filmes</FooterLi>
            <FooterLi>Seriados</FooterLi>
            <FooterLi>Documentários</FooterLi>
            <FooterLi>Originals</FooterLi>
            <FooterLi>Mais vistos</FooterLi>
          </FooterUl>
        </FooterItem>
        <FooterItem>
          <FooterUl>
            <FooterTitle>Central de Ajuda</FooterTitle>
            <FooterLi>Assistente de Vendas</FooterLi>
            <FooterLi>Entre em Contato</FooterLi>
            <FooterLi>Privacidade</FooterLi>
            <FooterLi>Termos de Uso</FooterLi>
            <FooterLi>Carreiras</FooterLi>
          </FooterUl>
        </FooterItem>
        <FooterItem>
          <FooterUl>
            <FooterTitle>Compras</FooterTitle>
            <FooterLi>Plano Mensal</FooterLi>
            <FooterLi>Plano Semestral</FooterLi>
            <FooterLi>Plano Anual</FooterLi>
            <FooterLi>Comprar Cartão Pré-Pago</FooterLi>
            <FooterLi>Como ativar cartão pré-pago</FooterLi>
          </FooterUl>
        </FooterItem>
        <FooterItem>
          <FooterUl>
            <FooterTitle>Suporte</FooterTitle>
            <FooterLi>Central de Vendas</FooterLi>
            <FooterLi>Planos de Assinatura</FooterLi>
            <FooterLi>Reclamações</FooterLi>
            <FooterLi>Conta</FooterLi>
            <FooterLi>Recuperar Acesso</FooterLi>
          </FooterUl>
        </FooterItem>
        <FooterItem>
          <FooterUl>
            <FooterTitle>Conta</FooterTitle>
            <FooterLi>
              <Link to="/users/login">Entre</Link>
            </FooterLi>
            <FooterLi>
              <Link to="/users/create">Cadastre-se</Link>
            </FooterLi>
          </FooterUl>
        </FooterItem>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;