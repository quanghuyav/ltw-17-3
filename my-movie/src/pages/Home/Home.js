import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from 'react';
import { API_KEY } from '../..';
import { Container, Typography } from '@mui/material';
import HeadMovieItem from '../../components/HeadMovieItem/HeadMovieItem';
import MovieItem from '../../components/MovieItem/MovieItem';

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);

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

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                },
            })
            .then((res) => {
                setNewMovies(res.data.results.slice(0, 10));
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

            <Typography
                sx={{
                    display: 'inline-block',
                    width: '100%',
                    fontWeight: 700,
                    marginTop: '20px',
                }}
                color="secondary"
                variant="h6"
                noWrap
            >
                Phim chiếu rạp mới nhất
            </Typography>
            <AliceCarousel
                infinite
                mouseTracking
                disableButtonsControls
                disableDotsControls
                responsive={{ 0: { items: 2 }, 600: { items: 5 } }}
                autoPlay={true}
                autoPlayInterval={3000} // Tự động phát sau mỗi 3 giây
            >
                {newMovies.map((movie) => (
                    <MovieItem key={movie.title} movie={movie}></MovieItem>
                ))}
            </AliceCarousel>
        </Container>
    );
}

export default Home;
