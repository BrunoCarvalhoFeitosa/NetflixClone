import styled from 'styled-components';

export const HeroBannerContainer = styled.section `
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 767px) {
    height: 90vh;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 80vh;
  }
`;

export const HeroBannerVerticalOverlay = styled.div `
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const HeroBannerHorizontalOverlay = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 0 84px 30px;
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent);
`;

export const HeroBannerFilm = styled.div `
  width: 46%;

  @media screen and (max-width: 1024px) {
    width: 74%;
  }
`;

export const HeroBannerFilmName = styled.h3 `
  margin: 0 0 16px 0;
  font-size: 60px;

  @media screen and (max-width: 767px) {
    font-size: 40px;
  }
`;

export const HeroBannerFilmSpecs = styled.div `
  display: flex;
  align-items: center;
`;

export const HeroBannerFilmSpecsPoints = styled.div `
  margin-right: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #46D369;
`;

export const HeroBannerFilmSpecsYear = styled.div `
  margin-right: 12px;
  font-size: 18px;
  font-weight: bold;
`;

export const HeroBannerFilmSpecsSeasons = styled.div `
  font-size: 18px;
  font-weight: bold;
`;

export const HeroBannerFilmDescription = styled.h4 `
  margin-top: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; 
  overflow: hidden; 
  font-size: 20px;
  font-weight: 500;
  color: #999;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const HeroBannerFilmActions = styled.div `
  margin-top: 18px;
  display: flex;
  a {
    display: flex;
    align-items: center;
    transition: .45s opacity;
    &:first-of-type, &:last-of-type {
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
      border-radius: 5px;
      padding: 12px 25px;
    }
    &:first-of-type {
      margin-right: 12px;
      background: #FFF;
      color: #000;
    }
    &:last-of-type {
      background: #333;
      color: #FFF;
    }
    &:hover {
      opacity: .6;
    }
    > span {
      margin-left: 6px;
      
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
  }
`;

export const HeroBannerFilmGenres = styled.div `
  margin-top: 18px;
  font-size: 18px;
  color: #999;
`;