import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ArtistInfo from "../components/ArtistPage/ArtistInfo"
import ArtistAlbums from "../components/ArtistPage/ArtistAlbums"
import ArtistSongsTop from "../components/ArtistPage/ArtistSongsTop"


const ArtistPage = () => {

    const { id } = useParams()

    const [ artist, getArtist ] = useFetch()

    useEffect(() => {
        getArtist(`/api/artists/${id}`)
    }, [id])

    console.log(artist);

  return (
    <div className="artist__page">
        <div className="artist__container">
        <Link className="artist__back" to ='/' > ↩ Back</Link>
        <ArtistInfo 
            artist={artist}
        />
        <ArtistAlbums 
            albums={artist?.albums}
        />
        <ArtistSongsTop 
            tracks={artist?.songsTop}
        />
        </div>
    </div>
  )
}

export default ArtistPage