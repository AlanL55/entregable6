import { useDispatch } from "react-redux"
import { deleteTrack } from "../../store/slices/tracks.slice"


const TrackList = ({ track }) => {

    const dispatch = useDispatch()

    const handleDelete = () =>{
        dispatch(deleteTrack(track))
    }

  return (
    <section className="track__container">
        <header className="track__header">
            <img className="track__img" src={track.album.images[0].url} alt="" />
        </header>
        <article className="track__article">
            <h3 className="track__name">{track.name}</h3>
            <ul className="track__list">
                {
                    track.artists.map(artist => (
                        <li className="track__artist" key={artist.id}>{artist.name}</li>
                    ))
                }
            </ul>
        </article>
        <footer onClick={handleDelete}>
            <i className='bx bx-minus-circle'></i>
        </footer>
    </section>
  )
}

export default TrackList