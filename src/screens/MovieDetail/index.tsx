import { Col, Row, Image } from 'antd';
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

function MovieDetail() {
  const { id } = useParams();
  const { data, ...movieDetailQuery } = useMovieDetail(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout type={NavbarType.PAGE}>
      <StateWrapper {...movieDetailQuery}>
        <Row style={{...styles.backImage, backgroundImage: `url(https://image.tmdb.org/t/p/w500${data?.poster_path})`}} />

        <Row gutter={[16, 16]} style={styles.row}>
          <Col xs={24} md={10} className='col-for-card-image contenido'>
            <Image alt={data?.title} fallback={notfound} style={styles.image} src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />
          </Col>

          <Col xs={24} md={14} style={styles.colDescription}>
            <MovieDescription data={data} />
          </Col>
        </Row>

        <Row>
          <MoviesRow title={'Actores'} useQueryHook={useCast} hookParam={id} actors={true} textAlign={TextAlign.START} />
        </Row>
      </StateWrapper>
    </PageLayout>
  );
}

export default MovieDetail;
