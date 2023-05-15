import { Card, Image, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import notfound from '@assets/notfound.png'
import { styles } from './styles';

const { Title, Text } = Typography;

const MiniCard = ({ imageSrc, title, date, movieId, direction='column' }: any) => {
    const navigate = useNavigate();

    const handleNavigate = () => navigate(`/movie/${movieId}`);

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };

    return (
        <Card style={styles.card} onClick={handleNavigate}>
            <div style={{...styles.container, flexDirection: direction}}>
                <Image fallback={notfound} src={imageSrc} style={styles.image} onClick={handleImageClick}/>
                <div>
                    <Title level={4}>{title}</Title>
                    <Text type="secondary">{date}</Text>
                </div>
            </div>
        </Card>
    );
};

export default MiniCard;