import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../..';

function WatchMovie() {
    const divRef = useRef();
    const { idMovie } = useParams();
    const [video, setVideo] = useState({});
    const [videoWidth, setVideoWidth] = useState(0);
    useEffect(() => {
        setVideoWidth(divRef.current.offsetWidth);
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setVideoWidth(divRef.current.offsetWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${idMovie}/videos`, {
                params: {
                    api_key: API_KEY,
                },
            })
            .then((res) => setVideo(res.data.results[0]));
    }, [idMovie]);
    console.log(video);
    return (
        <Container maxWidth="xl">
            <div ref={divRef} style={{ marginTop: '20px' }}>
                <iframe
                    width={videoWidth}
                    height={(videoWidth * 9) / 16}
                    src={'https://www.youtube.com/embed/' + video.key}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </Container>
    );
}

export default WatchMovie;
