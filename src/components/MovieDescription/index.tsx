import { Card, Col, Row, Typography } from "antd"
import { MovieDetailInterface } from "@interfaces/movies.interfaces";

const { Title, Text, Paragraph } = Typography;

interface IMovieDescription {
    data: Partial<MovieDetailInterface> | undefined
}

const MovieDescription = ({ data }: IMovieDescription) => {
    return (
        <Card title={<Title level={2}>{data?.title}</Title>} extra={<Text strong>{data?.release_date}</Text>}>
            <Card title="Descripción">
                <Paragraph>{data?.overview}</Paragraph>
            </Card>

            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <Card title="Géneros">
                        {data?.genres?.map((genre) => (
                            <Paragraph key={genre.id}>{genre.name}</Paragraph>
                        ))}
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card title="Detalles">
                        <Paragraph>
                            <Text strong>Lenguaje original:</Text> {data?.original_language}
                        </Paragraph>
                        <Paragraph>
                            <Text strong>Duracion:</Text> {data?.runtime} minutes
                        </Paragraph>
                        <Paragraph>
                            <Text strong>Promedio de votos:</Text> {data?.vote_average} / 10
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default MovieDescription