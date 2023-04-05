import { useEffect } from "react"
import useNowPlaying from "../../hooks/useNowPlaying"

const Home = () => {
    const {data: nowPlaying} = useNowPlaying()

    useEffect(() => {
        console.log(nowPlaying)
    }, [nowPlaying])

    return (
        <p>TEST</p>
    )
}

export default Home