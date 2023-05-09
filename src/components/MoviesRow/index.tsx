import _ from 'lodash';
import CustomCard from '@components/Card';
import StateWrapper from '@components/StateWrapper';
import { CSSProperties } from 'react';
import { styles } from './styles';
import notfound from '@assets/notfound.png'
import { Card, Typography, Image, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

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
    actors?: boolean;
    hookParam?: number | string | null | undefined;
    useQueryHook: (data?: any) => {
        data: any;
        isLoading: boolean;
        error: any;
        refetch: () => void;
    };
}

const MoviesRow = ({ title, textAlign, backgroundImage, actors = false, hookParam = null, useQueryHook }: IMoviesFlexProps) => {
    const { data: results, ...queryProps } = useQueryHook(hookParam)
    const navigate = useNavigate();

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
        <Row style={stylesForRow}>
            <Row className="gradient-row" style={styles.gradientRow} />
            <StateWrapper {...queryProps}>
                <Title level={3} style={styles.gradientTitle} className={`text-align: ${textAlign}`}>{title}</Title>
                
                <div className='custom-scroll' style={styles.customScroll}>
                    {actors && _.map(results?.cast, (result) =>
                        (<Card hoverable style={{width: 150, margin: '0px 5px'}} onClick={() => navigate(`/person/${result.id}`)} cover={<Image alt={'actor'} fallback={notfound} style={{height: 200, width: 150}} src={`https://image.tmdb.org/t/p/w500/${result.profile_path}`} />} key={result.id} >
                            <Card.Meta title={result.name!} description={result.character!} />
                        </Card>)
                    )}
                    {!actors && _.map(results?.results, (result) =>
                        (<CustomCard alt={result.title!} rating={result.vote_average?.toString()!} src={`https://image.tmdb.org/t/p/w500/${ result.poster_path }`} title={result.title!} movieId={result.id!} key={result.id} />)
                    )}
                </div>
            </StateWrapper>
        </Row>
    );
};

export default MoviesRow
