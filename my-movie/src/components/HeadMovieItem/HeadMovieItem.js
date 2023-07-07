import { Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HeadMovieItem({ movie }) {
    const [dragging, setDragging] = useState(false);
    return (
        <Link
            title={movie.title}
            style={{ display: 'block', padding: '5px', position: 'relative' }}
            draggable="false"
            to={'/xem-phim'}
            onClick={(e) => {}}
        >
            <img
                draggable={false}
                key={movie.title}
                style={{ width: '100%' }}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            ></img>
            <div
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    width: 'inherit',
                }}
            >
                <Typography
                    sx={{
                        textOverflow: 'ellipsis',
                        display: 'inline-block',
                        width: '100%',
                        textShadow: '0px 2px 4px black',
                        userSelect: 'none',
                    }}
                    color="white"
                    variant="h6"
                    noWrap
                >
                    {movie.title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '14px',
                        textShadow: '0px 2px 4px black',
                        userSelect: 'none',
                    }}
                    color="white"
                    variant="h6"
                    noWrap
                >
                    {movie.release_date.slice(0, 4)}
                </Typography>
            </div>
        </Link>
    );
}

export default HeadMovieItem;
