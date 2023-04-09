import { Card, Col, Row, Typography, Image } from 'antd';
import { useParams } from 'react-router-dom';
import useMovieDetail from '../../hooks/useMovieDetail';
import StateWrapper from '../../components/StateWrapper';
import notfound from '../../assets/notfound.png'
import Navbar, { NavbarType } from '../../components/Navbar';

const { Title, Text } = Typography;

function MovieDetail() {
  const { id } = useParams();
  const { data, ...movieDetailQuery } = useMovieDetail(Number(id));

  return (
    <div style={{overflowX: 'hidden'}}>
      <StateWrapper {...movieDetailQuery}>
        <Navbar type={NavbarType.PAGE}/>
        <Row gutter={[16, 16]} style={{marginTop: 30, marginRight: 15}}>
          <Col xs={24} md={10} style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card cover={<Image alt={data?.title} fallback={notfound} height={500} style={{borderRadius: 15}} src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />}>
            </Card>
          </Col>

          <Col xs={24} md={14}>
            <Card title={<Title level={2}>{data?.title}</Title>} extra={<Text strong>{data?.release_date}</Text>}>
              <Card title="Descripción">
                <p>{data?.overview}</p>
              </Card>

              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Card title="Géneros">
                    {data?.genres?.map((genre) => (
                      <p key={genre.id}>{genre.name}</p>
                    ))}
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card title="Detalles">
                    <p>
                      <strong>Lenguaje original:</strong> {data?.original_language}
                    </p>
                    <p>
                      <strong>Duracion:</strong> {data?.runtime} minutes
                    </p>
                    <p>
                      <strong>Promedio de votos:</strong> {data?.vote_average} / 10
                    </p>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </StateWrapper>
    </div>
  );
}

export default MovieDetail;