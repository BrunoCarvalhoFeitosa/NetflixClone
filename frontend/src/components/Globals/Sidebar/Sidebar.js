import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SidebarContainer,
  SidebarCta,
  SidebarContainerLinks,
  SidebarLink,
  SidebarAccess,
  SidebarSigin,
} from './SidebarStyled';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <SidebarContainer className={isOpen ? 'active' : ''}>
      <SidebarCta onClick={() => setIsOpen(!isOpen)} />
      <SidebarContainerLinks>
        <SidebarLink>Filmes</SidebarLink>
        <SidebarLink>Seriados</SidebarLink>
        <SidebarLink>Documentários</SidebarLink>
        <SidebarLink>Novelas</SidebarLink>
        <SidebarLink>Originals</SidebarLink>
        <SidebarLink>Planos de Assinatura</SidebarLink>
        <SidebarLink>Suporte</SidebarLink>
        <SidebarLink>
          <Link to="/users/login">Entrar</Link>
        </SidebarLink>
        <SidebarLink>
          <Link to="/users/create">Cadastre-se</Link>
        </SidebarLink>
      </SidebarContainerLinks>
      <SidebarAccess>
        <SidebarSigin>
          <p>Bem-vindo</p> 
          {localStorage.getItem('emailUser')}
        </SidebarSigin>
      </SidebarAccess>
    </SidebarContainer>
  )
};

export default Sidebar;