import { Container, Grid, Pagination, PaginationItem, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MovieItem from '../../components/MovieItem/MovieItem';
import { API_KEY } from '../..';

const listGenre = {
    28: 'Phim Hành Động',
    12: 'Phim Phiêu Lưu',
    16: 'Phim Hoạt Hình',
    35: 'Phim Hài',
    80: 'Phim Hình Sự',
    99: 'Phim Tài Liệu',
    18: 'Phim Chính Kịch',
    10751: 'Phim Gia Đình',
    14: 'Phim Giả Tượng',
    36: 'Phim Lịch Sử',
    27: 'Phim Kinh Dị',
    10402: 'Phim Nhạc',
    9648: 'Phim Bí Ẩn',
    10749: 'Phim Lãng Mạn',
    878: 'Phim Khoa Học Viễn Tưởng',
    10770: 'Chương Trình Truyền Hình',
    53: 'Phim Gây Cấn',
    10752: 'Phim Chiến Tranh',
    37: 'Phim Miền Tây',
};

function Genre() {
    const { genre, page } = useParams();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                    sort_by: 'release_date.desc',
                    page: page,
                    with_genres: genre,
                },
            })
            .then((res) => setMovies(res.data.results));
    }, [genre, page]);
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
                {listGenre[genre]}
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
                        to={'/the-loai/' + genre + '/page/' + item.page}
                        {...item}
                    />
                )}
            />
        </Container>
    );
}

export default Genre;
