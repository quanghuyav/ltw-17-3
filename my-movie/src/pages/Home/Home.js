import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from 'react';
import { API_KEY } from '../..';
import { Container, Typography } from '@mui/material';
import HeadMovieItem from '../../components/HeadMovieItem/HeadMovieItem';

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                },
            })
            .then((res) => {
                setPopularMovies(res.data.results.slice(0, 10));
            })
            .catch(() => console.log('lỗi'));
    }, []);
    return (
        <Container sx={{ marginTop: '20px' }} maxWidth="xl">
            <AliceCarousel
                infinite
                mouseTracking
                disableButtonsControls
                disableDotsControls
                responsive={{ 0: { items: 1 }, 600: { items: 2 } }}
                autoPlay={true}
                autoPlayInterval={3000} // Tự động phát sau mỗi 3 giây
            >
                {popularMovies.map((movie) => (
                    <HeadMovieItem key={movie.title} movie={movie}></HeadMovieItem>
                ))}
            </AliceCarousel>
        </Container>
    );
}

export default Home;
