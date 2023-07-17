import { Container, Grid, Pagination, PaginationItem, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MovieItem from '../../components/MovieItem/MovieItem';
import { API_KEY } from '../..';
function Year() {
    const { year, page } = useParams();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                    sort_by: 'release_date.desc',
                    page: page,
                    primary_release_year: year,
                },
            })
            .then((res) => setMovies(res.data.results));
    }, [year, page]);
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
                Năm {year}
            </Typography>
            <Grid container spacing={2}>
                {movies.map((movie) => (
                    <Grid key={movie.id} item xs={6} sm={4} md={2.4}>
                        <MovieItem movie={movie}></MovieItem>
                    </Grid>
                ))}
            </Grid>

            <Pagination
                sx={{ margin: '20px 0' }}
                page={page - 0}
                count={10}
                color="primary"
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        to={'/nam-phat-hanh/' + year + '/page/' + item.page}
                        {...item}
                    />
                )}
            />
        </Container>
    );
}

export default Year;
