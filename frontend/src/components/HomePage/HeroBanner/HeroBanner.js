import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeroBannerContainer,
  HeroBannerVerticalOverlay,
  HeroBannerHorizontalOverlay,
  HeroBannerFilm,
  HeroBannerFilmName,
  HeroBannerFilmSpecs,
  HeroBannerFilmSpecsPoints,
  HeroBannerFilmSpecsYear,
  HeroBannerFilmSpecsSeasons,
  HeroBannerFilmDescription,
  HeroBannerFilmActions,
  HeroBannerFilmGenres,
} from './HeroBannerStyled';
import { AiOutlinePlus } from 'react-icons/ai';
import { ImPlay3 } from 'react-icons/im';
import api from '../../../services/api';

const HeroBanner = ({ item }) => {
  const firstDate = new Date(item.first_air_date);
  const genres = [];
  for(let i in item.genres) {
    genres.push(item.genres[i].name);
  }

    const email = localStorage.getItem('emailUser');
    console.log('email Storage', email);
    api.get(`/user/15`).then(response => {
      console.log('resp', response);
    })

  return (
    <HeroBannerContainer style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`,
    }}>
      <HeroBannerVerticalOverlay>
        <HeroBannerHorizontalOverlay>
          <HeroBannerFilm>

            <HeroBannerFilmName>
              { item.original_name }
            </HeroBannerFilmName>

            <HeroBannerFilmSpecs>
              <HeroBannerFilmSpecsPoints>
                { item.vote_average } pontos
              </HeroBannerFilmSpecsPoints>
              <HeroBannerFilmSpecsYear>
                { firstDate.getFullYear() }
              </HeroBannerFilmSpecsYear>
              <HeroBannerFilmSpecsSeasons>
                { item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : '' }
              </HeroBannerFilmSpecsSeasons>
            </HeroBannerFilmSpecs>

            <HeroBannerFilmDescription>
              { item.overview }
            </HeroBannerFilmDescription>

            <HeroBannerFilmActions> 
              <Link to="/"> 
                <ImPlay3 size={18} color="#000" />
                <span>Assistir</span>
              </Link>
              <Link to="/"> 
                <AiOutlinePlus size={18} color="#FFF" />
                <span>Minha Lista</span>
              </Link>
            </HeroBannerFilmActions>

            <HeroBannerFilmGenres>
              <strong>Gêneros: </strong>
              { genres.join(', ') }.
            </HeroBannerFilmGenres>

          </HeroBannerFilm>
        </HeroBannerHorizontalOverlay>
      </HeroBannerVerticalOverlay>
    </HeroBannerContainer>
  );
};

export default HeroBanner;