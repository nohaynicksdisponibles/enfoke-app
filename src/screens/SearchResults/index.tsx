import { useLocation } from "react-router-dom";
import Navbar, { NavbarType } from "../../components/Navbar";
import MiniCard from "../../components/MiniCard";
import { IResult } from "../../interfaces/movies.interfaces";
import { Result } from "antd";

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state;

    return (
        <>
            <Navbar type={NavbarType.PAGE} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {results?.map((movie: IResult) => <MiniCard key={movie.id} imageSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.title} date={movie.release_date} movieId={movie.id} />)}
                {(!results || results?.length === 0) &&
                    <div style={{ minHeight: '90vh', display: 'flex', justifyContent:'center', alignItems: 'center' }} >
                        <Result
                            status="warning"
                            title="No hay resultados disponibles."
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default SearchResults