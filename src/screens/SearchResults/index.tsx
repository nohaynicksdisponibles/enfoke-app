import { useLocation } from "react-router-dom";
import MiniCard from "@components/MiniCard";
import { IResult } from "@interfaces/movies.interfaces";
import { Grid, Result } from "antd";
import PageLayout from "@components/PageLayout";
import { NavbarType } from "@components/Navbar";
import _ from "lodash";

const { useBreakpoint } = Grid;

const SearchResults = () => {
    const location = useLocation();
    const screens = useBreakpoint();
    const { results } = location.state;

    return (
        <PageLayout type={NavbarType.PAGE}>
            <div className="card-wrapper">
                {_.map(results, (movie: IResult) => <MiniCard direction={`${screens.md ? 'row': 'column'}`} key={movie.id} imageSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.title} date={movie.release_date} movieId={movie.id} />)}
                {(!results || results?.length === 0) &&
                    <div className="message-wrapper" >
                        <Result
                            status="warning"
                            title="No hay resultados disponibles."
                        />
                    </div>
                }
            </div>
        </PageLayout>
    )
}

export default SearchResults