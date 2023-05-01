import { Card, Image, Progress, Typography } from 'antd';
import notfound from '@assets/notfound.png'
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

const { Title, Paragraph } = Typography;

interface ICustomCard {
  alt: string;
  src: string;
  title?: string;
  description?: string;
  rating?: string;
  movieId: string;
}

const trailColor = '#4e5a52'
const dislikeColor = '#ffe153'
const likeColor = '#17ac6b'

const CustomCard = ({ alt, src, title = '', description = '', rating, movieId }: ICustomCard) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/movie/${movieId}`);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const percent = parseFloat(rating ?? '0') * 10
  const strokeColor = parseFloat(rating ?? '0') < 7 ? dislikeColor : likeColor

  return (
    <Card
      onClick={handleNavigate}
      hoverable
      style={styles.card}
      bodyStyle={styles.bodyStyle}
      cover={<Image fallback={notfound} onClick={handleImageClick} alt={alt} src={src} style={styles.image} />}
    >
      <div style={styles.cardBody}>
        <div style={styles.ratingContainer} >
          <Progress style={styles.progress}
            trailColor={trailColor}
            size={35}
            percent={percent}
            strokeColor={strokeColor}
            type="circle"
            format={() => <span style={styles.span}>{rating}</span>}
          />
        </div>
        <Title level={5}>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </div>
    </Card>
  );
}

export default CustomCard;
