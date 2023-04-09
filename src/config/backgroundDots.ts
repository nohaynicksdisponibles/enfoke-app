import dotsGreen from '../assets/dots-green.png'
import dotsOrange from '../assets/dots-orange.png'
import dotsViolet from '../assets/dots-violet.png'
import dotsBlue from '../assets/dots-blue.png'

interface IDots {
    GREEN: string;
    ORANGE: string;
    VIOLET: string;
    BLUE: string;
}

export const DOTS: Readonly<IDots> = {
    GREEN: dotsGreen,
    ORANGE: dotsOrange,
    VIOLET: dotsViolet,
    BLUE: dotsBlue
}
