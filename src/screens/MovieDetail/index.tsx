import { Card, Col, Row, Image } from 'antd';
import { useParams } from 'react-router-dom';
import useMovieDetail from '@hooks/useMovieDetail';
import StateWrapper from '@components/StateWrapper';
import notfound from '@assets/notfound.png'
import { NavbarType } from '@components/Navbar';
import PageLayout from '@components/PageLayout';
import MovieDescription from '@components/MovieDescription';

function MovieDetail() {
  const { id } = useParams();
  const { data, ...movieDetailQuery } = useMovieDetail(Number(id));

  return (
    <PageLayout type={NavbarType.PAGE}>
      <StateWrapper {...movieDetailQuery}>
        <Row gutter={[16, 16]} style={{marginTop: 30, marginRight: 15}}>
          <Col xs={24} md={10} className='col-for-card-image'>
            <Card cover={<Image alt={data?.title} fallback={notfound} height={500} style={{borderRadius: 15}} src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />}>
            </Card>
          </Col>

          <Col xs={24} md={14}>
            <MovieDescription data={data} />
          </Col>
        </Row>
      </StateWrapper>
    </PageLayout>
  );
}

export default MovieDetail;
