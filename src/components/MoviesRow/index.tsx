import _ from 'lodash';
import CustomCard from '@components/Card';
import StateWrapper from '@components/StateWrapper';
import { CSSProperties } from 'react';
import { styles } from './styles';
import { Typography } from 'antd';

const { Title } = Typography;

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

    const stylesForRow: CSSProperties = {
        position: 'relative',
        margin: '10px 0px',
        minHeight: 444,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...(backgroundImage ? backgroundStyles : {}
        )
    }

    return (
        <div style={stylesForRow}>
            <div className="gradient-row" style={styles.gradientRow} />
            <StateWrapper {...queryProps}>
                <Title level={3} style={styles.gradientTitle} className={`text-align: ${textAlign}`}>{title}</Title>
                <div className='custom-scroll' style={styles.customScroll}>
                    {_.map(results?.results, (result) => (
                        <CustomCard alt={result.title!} rating={result.vote_average?.toString()!} src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} title={result.title!} movieId={result.id!} key={result.id} />
                    ))}
                </div>
            </StateWrapper>
        </div>
    );
};

export default MoviesRow