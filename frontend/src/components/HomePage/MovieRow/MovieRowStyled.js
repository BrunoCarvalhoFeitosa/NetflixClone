import styled from 'styled-components';

export const Container = styled.section `
  width: 100%;
`;

export const Row = styled.div `
  margin-bottom: 30px;
`;

export const RowCategoryTitle = styled.h2 `
  margin: 0 0 12px 30px;
`;

export const RowCategoryFilm = styled.div `
  padding: 0 30px;
  overflow-x: hidden;
  &:hover {
    aside {
      opacity: 1;
    }
  }
`;

export const RowCategoryFilmSlicked = styled.div `
  display: flex;
  transition: .6s ease margin-left;
`;

export const RowCategoryFilmSlickedItem = styled.div `
  position: relative;
  img {
    width: 180px;
    transform: scale(0.9);
    transition: .55s transform;
    cursor: pointer;
    &:hover {
      transform: scale(1);
      opacity: .65;
    }
  }
`;

export const RowCategoryNavBefore = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  width: 40px;
  height: 270px;
  background: #000;
  transition: .75s ease opacity;
  z-index: 9;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: .7 !important;
  }
`;

export const RowCategoryNavNext = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  width: 40px;
  height: 270px;
  background: #000;
  transition: .75s ease opacity;
  z-index: 9;
  cursor: pointer;
  opacity: 0;
  &:hover {
    opacity: .7 !important;
  }
`;

