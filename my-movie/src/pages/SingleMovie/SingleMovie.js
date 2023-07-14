import { Container, Grid, Pagination, PaginationItem, Typography } from '@mui/material';
import MyPagination from '../../components/MyPagination/MyPagination';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../..';
import MovieItem from '../../components/MovieItem/MovieItem';
import { useParams } from 'react-router-dom';

function SingleMovie() {
    const [movies, setMovies] = useState([]);
    const page = useParams().page;
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                    sort_by: 'release_date.desc',
                    page: page,
                },
            })
            .then((res) => setMovies(res.data.results));
    }, [page]);

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
                Phim lẻ
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
                    <PaginationItem component={Link} to={'/phim-le/page/' + item.page} {...item} />
                )}
            />
        </Container>
    );
}

export default SingleMovie;
