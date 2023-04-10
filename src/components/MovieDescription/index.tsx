import { Card, Col, Row, Typography } from "antd"
import { MovieDetailInterface } from "@interfaces/movies.interfaces";

const { Title, Text } = Typography;

interface IMovieDescription {
    data: Partial<MovieDetailInterface> | undefined
}

const MovieDescription = ({data}: IMovieDescription) => {
    return (
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
    )
}

export default MovieDescription