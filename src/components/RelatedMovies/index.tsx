import { Cast } from '@interfaces/person.interfaces';
import { Card, Row, Image } from 'antd';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import notfound from '@assets/notfound.png'
import Title from 'antd/es/typography/Title';
import { styles } from './styles';

interface IRelatedMovies {
    name: string;
    data: any;
}

const RelatedMovies = ({ name, data }: IRelatedMovies) => {
    const navigate = useNavigate();

    return (
        <Row style={styles.row}>
            <Row className="gradient-row" style={styles.gradientRow} />

            <Title level={4} >{name}</Title>
                
            <div className='custom-scroll' style={styles.customScroll}>
                {_.map(data, (result: Cast) =>
                    (<Card hoverable style={{width: 150, margin: '0px 5px'}} onClick={() => navigate(`/movie/${result.id}`)} cover={<Image alt={'actor'} fallback={notfound} style={{height: 200, width: 150}} src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} />} key={result.id} >
                        <Card.Meta title={result.title!} description={result.character!} />
                    </Card>)
                )}
            </div>
        </Row>
    )
}

export default RelatedMovies