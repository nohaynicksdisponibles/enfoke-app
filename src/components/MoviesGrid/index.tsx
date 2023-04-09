import { Pagination } from 'antd';
import useNowPlaying from '../../hooks/useNowPlaying';
import _ from 'lodash'
import CustomCard from '../Card';
import { IResult } from '../../interfaces/movies.interfaces';
import { useState } from 'react';
import usePopular from '../../hooks/usePopular';

interface IMoviesFlexProps {
    movies?: any[];
    totalResults?: number;
    onChange?: (value: number) => void;
    defaultCurrent?: number;
    useQueryHook: (value: number) => {
      data: any;
      isLoading: boolean;
      error: any;
      refetch: () => void;
    };
  }
  
  const MoviesFlex = ({ movies = [], totalResults = 1000, onChange, defaultCurrent = 1, useQueryHook }: IMoviesFlexProps) => {
    const [current, setCurrent] = useState(1);
    const { data: results, ...queryProps } = useQueryHook(current);
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div></div>
        <div style={{ display: 'flex', width: '100vw', justifyContent: 'flex-start', overflowX: 'scroll' }}>
          {_.map(results?.results, (result) => (
            <CustomCard movieId={results?.id!} alt={result.title!} description={result.popularity?.toString()!} src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} title={result.title!} key={result.id} />
          ))}
        </div>
        <Pagination onChange={value => setCurrent(value)} total={totalResults} pageSize={20} style={{ marginTop: '10px' }} defaultCurrent={current} />
      </div>
    );
  };