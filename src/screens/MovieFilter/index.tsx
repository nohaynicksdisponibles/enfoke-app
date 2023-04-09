import { useContext, useEffect, useState } from 'react';
import { Row, Col, Card, Radio } from 'antd';
import { MovieType, provider } from '../../context';
import useGenres from '../../hooks/useGenres';
import Navbar, { NavbarType } from '../../components/Navbar';
import StateWrapper from '../../components/StateWrapper';
import { useParams } from 'react-router-dom';
import useMovieType from '../../hooks/useMovieType';
import useJoinQueryResults from '../../hooks/useJoinQueriesResult';
import _, { filter } from 'lodash';
import { Options } from '../../context/reducer';

const routes = ['nowplaying', 'popular', 'toprated', 'upcoming']

const MovieFilter = () => {
    const { type } = useParams<{ type: MovieType }>();

    if (!routes.includes(String(type))) {
        return (
            <p>HUBO UN ERROR</p>
        )
    }

    const [page, setPage] = useState(1);

    const useFetchMovies = useMovieType(type!)

    const { data: genres, ...genresQuery } = useGenres()
    const { data: moviesData, isSuccess, ...fetchMoviesQuery } = useFetchMovies(page)
    // const {...queryResults} = useJoinQueryResults([genresQuery, fetchMoviesQuery])

    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    const { data, dispatch } = useContext(provider)

    useEffect(() => {
        if (isSuccess) dispatch({ type: Options[type!], payload: moviesData.results })
    }, [moviesData])

    /*
    _.filter(
        data[type!], function (movie) {
            if (!selectedValue) return true;

            const result = _.find(movie.genre_ids, selectedValue)

            result ? true : false
        }
    );*/

    return (
        <>
            <Navbar type={NavbarType.PAGE} />


            <Row gutter={[16, 16]}>
                <Col  flex="0 0 30%">
                    <StateWrapper {...genresQuery} >
                        <div>
                            <Radio.Group value={selectedValue} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} onChange={e => setSelectedValue(e.target.value)}>
                                {genres?.genres.map(genre => (
                                    <Radio.Button key={genre.id} value={genre.id}>{genre.name}</Radio.Button>
                                ))}
                            </Radio.Group>
                        </div>
                    </StateWrapper>

                </Col>
                <Col  flex="1">
                    {data[type!].filter((movie) => !selectedValue || movie.genre_ids?.includes(Number(selectedValue))).map((movie) => (
                        <Card
                            cover={
                                <img
                                    alt={movie.title}
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                />
                            }
                        >
                            <Card.Meta title={movie.title} description={`Rating: ${movie.vote_average}`} />
                        </Card>
                    ))}</Col>
            </Row>
        </>
    );
};

export default MovieFilter;
