import React, { useEffect, useState } from 'react';
import Tmdb from '../../services/Tmdb';
import Navbar from '../../components/Globals/Navbar/Navbar';
import Sidebar from '../../components/Globals/Sidebar/Sidebar';
import Footer from '../../components/Globals/Footer/Footer';
import HeroBanner from '../../components/HomePage/HeroBanner/HeroBanner';
import MovieRow from '../../components/HomePage/MovieRow/MovieRow';
import {HomePageSection, List } from './HomePageStyled';
import { GlobalStyle } from '../../GlobalStyled';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [heroBanner, setHeroBanner] = useState([null]);

  useEffect(() => {
    const getFilms = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let listFilms = list.filter(i => i.slug === 'originals');
      let randomListFims = Math.floor(Math.random() * listFilms[0].items.results.length - 1);
      let filmSorted = listFilms[0].items.results[randomListFims];
      let filmSortedSpecs = await Tmdb.getMovieSpecs(filmSorted.id, 'tv');
      setHeroBanner(filmSortedSpecs);
    };
    getFilms();
  }, []);

  return (
    <HomePageSection>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      
      {heroBanner &&
        <HeroBanner item={ heroBanner } />
      }

      <List>
        {movieList.map(( item, key ) => (
          <MovieRow key={ key } title={ item.title } items={ item.items } alt={ item.original_title } />
        ))}
      </List>

      <Footer />
    </HomePageSection>
  );
};

export default App;