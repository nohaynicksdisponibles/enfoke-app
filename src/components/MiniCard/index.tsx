import { Card, Image, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import notfound from '../../assets/notfound.png'

const { Title, Text } = Typography;

const MiniCard = ({ imageSrc, title, date, movieId }: any) => {
    const navigate = useNavigate();

    const handleNavigate = () => navigate(`/movie/${movieId}`);

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };

    return (
        <Card style={{ minWidth: '50%', maxWidth: '50%', margin: '15px 0px', cursor: 'pointer' }} onClick={handleNavigate}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image fallback={notfound} src={imageSrc} style={{ width: 100, marginRight: 16, display: 'inline-block' }} onClick={handleImageClick}/>
                <div>
                    <Title level={4}>{title}</Title>
                    <Text type="secondary">{date}</Text>
                </div>
            </div>
        </Card>
    );
};

export default MiniCard;