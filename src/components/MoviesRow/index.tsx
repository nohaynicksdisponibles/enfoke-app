import _ from 'lodash';
import styles from './styles';
import CustomCard from '../Card';
import StateWrapper from '../StateWrapper';
import { CSSProperties } from 'react';

export enum TextAlign {
    START = 'start',
    END = 'end',
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
    JUSTIFY = 'justify',
    MATCHPARENT = 'match-parent'
}

interface IMoviesFlexProps {
    title: string;
    textAlign: TextAlign;
    backgroundImage?: string;
    useQueryHook: () => {
        data: any;
        isLoading: boolean;
        error: any;
        refetch: () => void;
    };
}

const MoviesRow = ({ title, textAlign, backgroundImage, useQueryHook }: IMoviesFlexProps) => {
    const { data: results, ...queryProps } = useQueryHook();

    const backgroundStyles: CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100% 100%'
    }

    const styles: CSSProperties = {position: 'relative', margin: '10px 0px', minHeight: 444, maxWidth: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', ...(backgroundImage ? backgroundStyles : {})}

    return (
        <div style={styles}>
            <div className="gradient-row" style={{position: 'absolute', top: 0, right: 0, width: 50, height: 444, zIndex:20}}/>
            <StateWrapper {...queryProps}>
                <h2 style={{ textAlign: textAlign, marginInline: 5, fontWeight: 'bold', fontFamily: 'sans-serif' ,margin: 5}}>{title}</h2>
                <div className='custom-scroll' style={{ display: 'flex', width: '100vw', minHeight: 400, justifyContent: 'flex-start', overflowX: 'scroll', maxWidth: '100vw'}}>
                    {_.map(results?.results, (result) => (
                        <CustomCard alt={result.title!} rating={result.vote_average?.toString()!} src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} title={result.title!} movieId={result.id!} key={result.id} />
                    ))}
                </div>
            </StateWrapper>
        </div>
    );
};

export default MoviesRow