import styled from 'styled-components';

export const NavbarContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: transparent;
  transition: all ease 0.4s;
  z-index: 9999;
  &.black {
    background: #000;
  }
`;

export const NavbarContent = styled.header `
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  height: 100%;
`;

export const NavbarLogo = styled.div `
  img {
    transition: .19s transform;
    transform: scale(0.88);
    z-index: 9999;
    cursor: pointer;
    &:hover {
      transform: scale(1);
    }
  }
`;