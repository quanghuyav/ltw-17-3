import { Container, Grid, Pagination, PaginationItem, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieItem from '../../components/MovieItem/MovieItem';
import { API_KEY } from '../..';

function SearchPage() {
    const { text } = useParams();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                    sort_by: 'release_date.desc',
                    query: text,
                },
            })
            .then((res) => setMovies(res.data.results));
    }, [text]);
    return (
        <Container maxWidth="xl">
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
                {movies.length != 0
                    ? 'Phim khớp với giá trị: ' + text
                    : 'Không có bộ phim nào phù hợp'}
            </Typography>
            <Grid container spacing={2}>
                {movies.map((movie) => (
                    <Grid key={movie.id} item xs={6} sm={4} md={2.4}>
                        <MovieItem movie={movie}></MovieItem>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default SearchPage;
