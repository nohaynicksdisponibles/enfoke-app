import { useContext, useEffect, useState } from 'react';
import { Row, Col, Grid } from 'antd';
import { MovieType, provider } from '@context/index';
import useGenres from '@hooks/useGenres';
import StateWrapper from '@components/StateWrapper';
import { useParams } from 'react-router-dom';
import useMovieType from '@hooks/useMovieType';
import { Options } from '@context/reducer';
import PageLayout from '@components/PageLayout';
import MoviesGrid from '@components/MoviesGrid';
import PageNotFound from '@screens/PageNotFound';
import GenresFilter from '@components/GenresFilter';
import { NavbarType } from '@components/Navbar';

const routes = ['nowplaying', 'popular', 'toprated', 'upcoming']

const { useBreakpoint } = Grid;

const MovieFilter = () => {
    const screens = useBreakpoint();
    const { type } = useParams<{ type: MovieType }>();

    if (!routes.includes(String(type))) {
        return (
            <PageNotFound />
        )
    }

    const [page, setPage] = useState(1);

    const useFetchMovies = useMovieType(type!);

    const { data: genres, ...genresQuery } = useGenres()
    const { data: moviesData, isSuccess, ...moviesQuery } = useFetchMovies(page)

    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    const { data, dispatch } = useContext(provider)

    useEffect(() => {
        if (isSuccess) dispatch({ type: Options[type!], payload: moviesData.results })
    }, [moviesData])

    return (
        <PageLayout type={NavbarType.PAGE}>
            <Row style={{ padding: 10, display: 'flex' }}>
                <Col span={screens.md ? 5: 24}>
                    <StateWrapper {...genresQuery} >
                        <GenresFilter selectedValue={selectedValue!} setSelectedValue={setSelectedValue} genres={genres!} />
                    </StateWrapper>
                </Col>
                <Col span={screens.md ? 19: 24}>
                    <StateWrapper isSuccess={isSuccess} {...moviesQuery} >
                        <MoviesGrid movies={data[type!]} selectedValue={selectedValue!} page={page} total={moviesData?.total_results!} onChange={setPage} />
                    </StateWrapper>
                </Col>
            </Row>
        </PageLayout >
    );
};

export default MovieFilter;
