import { Col, Row, Image, Grid } from 'antd';
import { useParams } from 'react-router-dom';
import useMovieDetail from '@hooks/useMovieDetail';
import StateWrapper from '@components/StateWrapper';
import notfound from '@assets/notfound.png'
import { NavbarType } from '@components/Navbar';
import PageLayout from '@components/PageLayout';
import MovieDescription from '@components/MovieDescription';
import MoviesRow, { TextAlign } from '@components/MoviesRow';
import useCast from '@hooks/useCast';
import { useEffect } from 'react';
import { styles } from './styles';

const { useBreakpoint } = Grid;

function MovieDetail() {
  const { id } = useParams();
  const screens = useBreakpoint();
  const { data, ...movieDetailQuery } = useMovieDetail(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout type={NavbarType.PAGE}>
      <StateWrapper {...movieDetailQuery}>
        <Row style={{...styles.backImage, backgroundImage: `url(https://image.tmdb.org/t/p/w500${data?.poster_path})`, ...((screens.md) && {marginTop: 0})}} />

        <Row gutter={[16, 16]} style={{...styles.row, ...((screens.md) && {height: '85vh'}) }}>
          <Col xs={24} md={10} className='col-for-card-image contenido'>
            <Image alt={data?.title} fallback={notfound} style={{...styles.image, ...((screens.md) && {marginTop: 0})}} src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />
          </Col>

          <Col xs={24} md={14} style={styles.colDescription}>
            <MovieDescription data={data} color={`${screens.md ? 'white': 'black'}`} />
          </Col>
        </Row>

        <Row style={{...styles.personRow, ...((screens.md) && {marginTop: 0}) }}>
          <MoviesRow title={'Actores'} useQueryHook={useCast} hookParam={id} actors={true} textAlign={TextAlign.START} />
        </Row>
      </StateWrapper>
    </PageLayout>
  );
}

export default MovieDetail;
