import { Divider, Menu } from "antd"
import MoviesRow, { TextAlign } from "../../components/MoviesRow"
import { DOTS } from "../../config/backgroundDots"
import useNowPlaying from "../../hooks/useNowPlaying"
import usePopular from "../../hooks/usePopular"
import useTopRated from "../../hooks/useTopRated"
import useUpcoming from "../../hooks/useUpcoming"
import Header from "../../components/Header"
import Navbar, { NavbarType } from "../../components/Navbar"

const Home = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navbar type={NavbarType.HOME} />
            <Header/>
            <MoviesRow title={'En emisión'} textAlign={TextAlign.START} useQueryHook={useNowPlaying} backgroundImage={DOTS.ORANGE} />
            <Divider />
            <MoviesRow title={'Lo más popular'} textAlign={TextAlign.START} useQueryHook={usePopular} backgroundImage={DOTS.GREEN} />
            <Divider />
            <MoviesRow title={'Las mejor valoradas'} textAlign={TextAlign.START} useQueryHook={useTopRated} backgroundImage={DOTS.VIOLET} />
            <Divider />
            <MoviesRow title={'Próximamente'} textAlign={TextAlign.START} useQueryHook={useUpcoming} backgroundImage={DOTS.BLUE} />
        </div>
    )
}

export default Home