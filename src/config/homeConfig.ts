import Header from "@components/Header"
import MoviesRow, { TextAlign } from "@components/MoviesRow"
import useNowPlaying from "@hooks/useNowPlaying"
import { DOTS } from "./backgroundDots"
import { Divider } from "antd"
import usePopular from "@hooks/usePopular"
import useTopRated from "@hooks/useTopRated"
import useUpcoming from "@hooks/useUpcoming"
import i18next from '@config/i18n';

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
        title: i18next.t("Home:Ongoing"),
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
        title: i18next.t("Home:Popular"),
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
        title: i18next.t("Home:TopRated"),
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
        title: i18next.t("Home:Upcoming"),
        textAlign: TextAlign.START,
        useQueryHook: useUpcoming,
        backgroundImage: DOTS.BLUE
    }
}]

export default HomeOptions