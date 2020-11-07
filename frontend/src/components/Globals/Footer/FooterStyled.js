import styled from 'styled-components';

export const FooterContainer = styled.footer `
  width: 100%;
  background: #111;
`;

export const FooterHeader = styled.div `
  margin: 0 auto;
  width: 94%;
  border-bottom: 1px solid #2C2C2C;
  padding-top: 50px;
  img {
    margin-bottom: 10px;
    margin-left: -12px;
    width: 80px;
    opacity: .75;
    transition: .45s ease opacity;
    &:hover {
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const FooterWrapper = styled.div `
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px 80px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterItem = styled.div `

`;

export const FooterUl = styled.ul `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterTitle = styled.h5 `
  margin-bottom: 18px;
  font-size: 18px;
  color: #999;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterLi = styled.li `
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #999;
  &:hover {
    text-decoration: underline;
  }
  > a {
    font-size: 14px;
    color: #999;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;