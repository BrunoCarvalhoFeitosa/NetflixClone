import React, { useState } from 'react';
import {
  Container,
  Row,
  RowCategoryTitle, 
  RowCategoryFilm,
  RowCategoryFilmSlicked,
  RowCategoryFilmSlickedItem,
  RowCategoryNavBefore,
  RowCategoryNavNext,
} from './MovieRowStyled';
import { GrPrevious, GrNext } from 'react-icons/gr';

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-800);

  const handlePreviousSlideItem = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleNextSlideItem = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;
    if((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(x);
  };

  return (
    <Container>
      <Row>
        <RowCategoryTitle>
          { title }
        </RowCategoryTitle>
        <RowCategoryFilm>
          <RowCategoryNavBefore onClick={handlePreviousSlideItem}>
            <GrPrevious size={30} />
          </RowCategoryNavBefore>
          <RowCategoryNavNext onClick={handleNextSlideItem}>
            <GrNext size={30} />
          </RowCategoryNavNext>
          <RowCategoryFilmSlicked style={{
            marginLeft: scrollX,
            width: items.results.length * 150
          }}>
            { items.results.length > 0 && items.results.map((item, key) => (
              <RowCategoryFilmSlickedItem key={ key }>
                <img src={`https://image.tmdb.org/t/p/w300${ item.poster_path }`} alt={ item.original_title } />
              </RowCategoryFilmSlickedItem>
            ))} 
          </RowCategoryFilmSlicked>
        </RowCategoryFilm>
      </Row>
    </Container>
  );
};

export default MovieRow;