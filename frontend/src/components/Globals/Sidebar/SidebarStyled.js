import styled from 'styled-components';

export const SidebarContainer = styled.div `
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateX(-310px);
  width: 310px;
  height: 100vh;
  background: #000;
  transition: .55s transform;
  z-index: 999;
  &.active {
    transform: translateX(0);
  }
`;

export const SidebarCta = styled.div `
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -3px;
  width: 3px;
  height: 100px;
  background: #E50914;
  cursor: pointer;
`;

export const SidebarAccess = styled.div `
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
`;

export const SidebarSigin = styled.span `
  font-size: 14px;
  font-weight: bold;
  text-align: end;
  color: #555;
  p {
    margin: 0;
    color: #555;
  }
`;

export const SidebarContainerLinks = styled.ul `
  list-style: none;
  margin: 90px 0 0;
  padding: 0px 30px 0;
`;

export const SidebarLink = styled.li `
  list-style: none;
  margin-bottom: 10px;
  cursor: pointer;
  a {
    color: #FFF;
  }
  &:hover {
    text-decoration: underline;
  }
`;
