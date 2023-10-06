import { useDispatch } from "react-redux"
import { addTracks } from "../../store/slices/tracks.slice"
import { Link, useNavigate } from "react-router-dom"
import "./styles/TrackCard.css"

const TrackCard = ( { track } ) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddTrack = () => {
        dispatch(addTracks(track))
    }

    const handleArtist = ( id ) => {
        navigate(`/artist/${id}`)
    }
    return (
        <section className="card__container">
            <header className="card__header">
                <img className="card__img" src={track.album.images[0].url} alt="" />
            </header>
            <article className="card__list">
                <Link className="card__list__title" to = {`/track/${track.id}`}><h3 className="card__list__name">{track.name}</h3></Link>
                <ul className="card__list__artist">
                    {
                        track.artists.map(artist => (
                            <li className="card__list__artist" onClick={() => handleArtist(artist.id)} key={artist.id}>{artist.name}</li>
                        ))
                    }
                </ul>
            </article>
            <footer className="card__buttons">
                <a target='_blank' href={track.external_urls.spotify}>
                    <i className='bx bxl-spotify' ></i>
                </a>
                <button className="card__circle" onClick={handleAddTrack}>
                    <i className='bx bx-plus-circle'></i>
                </button>
            </footer>
        </section>
    )
}

export default TrackCard