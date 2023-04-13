import Header from "@components/Header"
import MoviesRow, { TextAlign } from "@components/MoviesRow"
import useNowPlaying from "@hooks/useNowPlaying"
import { DOTS } from "./backgroundDots"
import { Divider } from "antd"
import usePopular from "@hooks/usePopular"
import useTopRated from "@hooks/useTopRated"
import useUpcoming from "@hooks/useUpcoming"

export interface HomeOptionsType {
    Component: React.FC<any>;
    props: {
        [key: string]: any;
    };
}

const HomeOptions: HomeOptionsType[] = [{
    Component: Header,
    props: {}
},
{
    Component: MoviesRow,
    props: {
        title: 'En emisión',
        textAlign: TextAlign.START,
        useQueryHook: useNowPlaying,
        backgroundImage: DOTS.ORANGE
    }
},
{
    Component: Divider,
    props: {}
},
{
    Component: MoviesRow,
    props: {
        title: 'Lo más popular',
        textAlign: TextAlign.START,
        useQueryHook: usePopular,
        backgroundImage: DOTS.GREEN
    }
},
{
    Component: Divider,
    props: {}
},
{
    Component: MoviesRow,
    props: {
        title: 'Las mejor valoradas',
        textAlign: TextAlign.START,
        useQueryHook: useTopRated,
        backgroundImage: DOTS.VIOLET
    }
},
{
    Component: Divider,
    props: {}
},
{
    Component: MoviesRow,
    props: {
        title: 'Próximamente',
        textAlign: TextAlign.START,
        useQueryHook: useUpcoming,
        backgroundImage: DOTS.BLUE
    }
}]

export default HomeOptions