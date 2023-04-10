import { Card, Image } from 'antd';
import notfound from '@assets/notfound.png'
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

interface ICustomCard {
  alt: string;
  src: string;
  title?: string;
  description?: string;
  rating?: string;
  movieId: string;
}

const CustomCard = ({ alt, src, title = '', description = '', rating, movieId }: ICustomCard) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/movie/${movieId}`);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

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
          <p style={styles.rating}>{rating}</p>
        </div>
        <h4 style={styles.title}>{title}</h4>
        <p>{description}</p>
      </div>
    </Card>
    );
}

export default CustomCard;