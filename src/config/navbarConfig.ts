export interface OptionsType {
    to: string;
    key: string;
    text: string;
}

const options: OptionsType[] = [{
    to: '/',
    key: 'home',
    text: 'Home'
},
{
    to: '/filter/nowplaying',
    key: 'nowplaying',
    text: 'En emisión'
},
{
    to: '/filter/popular',
    key: 'popular',
    text: 'Popular'
},
{
    to: '/filter/toprated',
    key: 'toprated',
    text: 'Mejor Valoradas'
},
{
    to: '/filter/upcoming',
    key: 'upcoming',
    text: 'Próximamente'
}]

export default options