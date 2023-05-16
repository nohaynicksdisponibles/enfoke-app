import { Card, Pagination, Image, Typography } from 'antd';
import _ from 'lodash'
import { IResult } from '@interfaces/movies.interfaces';
import notfound from '@assets/notfound.png'
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

interface IMoviesGridProps {
  movies?: IResult[];
  onChange?: (value: number) => void;
  selectedValue: string;
  page: number;
  total: number;
}

const MoviesGrid = ({ movies = [], selectedValue, page, total = 1000, onChange }: IMoviesGridProps) => {
  const navigate = useNavigate();

  const handleNavigate = (movie: IResult) => navigate(`/movie/${movie.id}`);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const filteredMovies = movies.filter((movie: IResult) => !selectedValue || movie.genre_ids?.includes(Number(selectedValue)))

  return (
    <>
      <div style={styles.cardContainer}>
        {filteredMovies.length === 0 && <Typography.Text>No se encontraron resultados</Typography.Text>}
        {
          _.map(
            filteredMovies,
            (movie: IResult) => 
              <Card
                onClick={() => handleNavigate(movie)}
                style={styles.card}
                cover={<Image
                  onClick={handleImageClick}
                  alt={movie.title}
                  height={280}
                  fallback={notfound}
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />}
              >
                <Card.Meta className='meta' title={movie.title} description={`Rating: ${movie.vote_average}`} />
              </Card>
          )
        }
      </div>
      <div style={styles.pagination}>
        <Pagination defaultCurrent={page} total={total} onChange={onChange} />
      </div>
    </>

  );
};

export default MoviesGrid