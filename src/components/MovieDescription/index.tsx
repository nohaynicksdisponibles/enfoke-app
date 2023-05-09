import { Card, Row, Typography } from "antd"
import { MovieDetailInterface } from "@interfaces/movies.interfaces";
import { styles } from "./styles";

const { Title, Text, Paragraph } = Typography;

interface IMovieDescription {
    data: Partial<MovieDetailInterface> | undefined
}

const MovieDescription = ({ data }: IMovieDescription) => {
    return (
        <Card 
            style={styles.mainCard} 
            headStyle={styles.headStyle} 
            title={<Title level={2} style={styles.mainTitle}>{data?.title!}</Title>} 
        >
            <Card 
                title={<Title level={4} style={styles.descriptionTitle}>{'Descripción'}</Title>} 
                style={styles.descriptionCard}
            >
                <Paragraph style={styles.descriptionP}>{data?.overview}</Paragraph>
            </Card>

            <Row gutter={[16, 16]} style={styles.row}>
                <Card 
                    title={<Title level={4} style={styles.genreColor}>{'Géneros'}</Title>}
                    extra={<Text strong style={styles.genreColor}>{data?.release_date}</Text>}
                    style={styles.genreCard}
                >
                    {data?.genres?.map((genre) => (
                        <Paragraph key={genre.id} style={styles.genreColor}>{genre.name}</Paragraph>
                    ))}
                </Card>

                <Card 
                    title={<Title level={4} style={styles.detailColor}>{'Detalles'}</Title>} 
                    style={styles.detailCard}
                >
                    <Paragraph style={styles.detailColor}>
                        <Text style={styles.detailColor} strong>Lenguaje original:</Text> {data?.original_language}
                    </Paragraph>
                    <Paragraph style={styles.detailColor}>
                        <Text style={styles.detailColor} strong>Duracion:</Text> {data?.runtime} minutes
                    </Paragraph>
                    <Paragraph style={styles.detailColor}>
                        <Text style={styles.detailColor} strong>Promedio de votos:</Text> {data?.vote_average} / 10
                    </Paragraph>
                </Card>
            </Row>
        </Card>
    )
}

export default MovieDescription
