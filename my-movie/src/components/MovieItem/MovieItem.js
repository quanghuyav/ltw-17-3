import { Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
    const [dragging, setDragging] = useState(false);
    return (
        <Link
            title={movie.title}
            style={{
                display: 'block',
                padding: '5px',
                position: 'relative',
                textDecoration: 'none',
            }}
            to={'/xem-phim/' + movie.id}
            onDragStart={(e) => {
                e.preventDefault();
                setDragging(true);
            }}
            onClick={(e) => {
                if (dragging) {
                    e.preventDefault();
                    setDragging(false);
                }
            }}
        >
            <img
                draggable={false}
                key={movie.title}
                style={{ width: '100%' }}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            ></img>
            <div
                style={{
                    width: 'inherit',
                }}
            >
                <Typography
                    sx={{
                        textOverflow: 'ellipsis',
                        display: 'inline-block',
                        width: '100%',
                        userSelect: 'none',
                        fontSize: '16px',
                    }}
                    color="primary"
                    variant="h6"
                    noWrap
                >
                    {movie.title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '14px',
                        userSelect: 'none',
                        lineHeight: '1',
                    }}
                    color="primary"
                    variant="h6"
                    noWrap
                >
                    {movie.release_date.slice(0, 4)}
                </Typography>
            </div>
        </Link>
    );
}

export default MovieItem;
