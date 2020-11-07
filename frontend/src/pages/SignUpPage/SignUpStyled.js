import styled, { keyframes } from 'styled-components';

const callToAction = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  } 20%, 80% {
    transform: translate3d(2px, 0, 0);
  } 30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  } 40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const SignUpPageSection = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const SignUpContainer = styled.div `
  width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignUpLogo = styled.div `
  margin-bottom: 30px;
  img {
    width: 85px;
    opacity: .75;
    transition: .45s opacity;
    &:hover {
      opacity: 1;
    }
  }
`;

export const SignUpForm = styled.form `
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SignUpControl = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const SignUpRow = styled.div `
  width: 48%;
   label {
    display: block;
    margin-bottom: 14px;
    font-size: 15px;
    cursor: pointer;
  }

  > input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    border-radius: 25px;
    box-shadow: -7px -7px 10px 0 rgba(255, 255, 255, 0.04), 7px 7px 10px 0 rgba(0, 0, 0, 0.8);
    padding: 14px 0 14px 14px;
    font-size: 12px;
    color: #FFF;
    &#street,
    &#neighborhood,
    &#city,
    &#state {
      cursor: not-allowed;
    }
    &::-webkit-input-placeholder {
      font-size: 12px;
      opacity: .22;
    }
  }

  input[type='file'] {
    background: #222;
    padding: 11px 0 11px 14px;
    cursor: pointer;
  }
`;

export const SignUpError = styled.p `
  font-size: 13px;
  color: #555;
`;

export const SignUpSignIn = styled.div `
  display: flex;
  justify-content: flex-end;
  a {
    margin: 5px 0 10px;
    font-size: 14px;
    text-decoration: underline;
    opacity: .3;
    color: #999;
  }
`;

export const SignUpSubmit = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #E50914;
    box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.8);
    transition: .75s opacity;
    animation: ${callToAction} 1.8s infinite;
    opacity: .75;
    cursor: pointer;
    &:hover {
      animation: none;
      opacity: 1;
    }
    svg {
      path {
        fill: #FFF;
      }
    }
  }
`;