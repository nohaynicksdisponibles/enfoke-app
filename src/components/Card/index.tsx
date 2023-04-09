import { Card, Image } from 'antd';
import notfound from '../../assets/notfound.png'
import { useNavigate } from 'react-router-dom';

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
      style={{ marginInline: 5, marginBottom: 5 }}
      bodyStyle={{ height: 106 }}
      cover={<Image fallback={notfound} onClick={handleImageClick} alt={alt} src={src} style={{ width: 150, height: 225, borderRadius: '10px', position: 'relative' }} />}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: -15 }}>
        <div style={{ width: 35, height: 35, borderRadius: '50%', backgroundColor: '#E64830', position: 'absolute', top: 200, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <p style={{ fontWeight: 'bold', color: 'white' }}>{rating}</p>
        </div>
        <h4 style={{ overflow: 'visible', marginBottom: '5px' }}>{title}</h4>
        <p>{description}</p>
      </div>
    </Card>
    );
}

export default CustomCard;