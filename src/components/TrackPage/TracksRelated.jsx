import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import TrackCard from "../HomePage/TrackCard"

const TracksRelated = ({ artist }) => {

    const [ trackList, getTrackList ] = useFetch()

    useEffect(() => {
        if(artist){
        getTrackList(`/api/tracks?limit=3&q=${artist}`)
        } 
    }, [artist])

  return (
    <section className="related__tracks">
        <h1 className="related__title">Tracks Related</h1>
        <div className="related__container">
            {
                trackList?.tracks.items.map(track => (
                    <TrackCard 
                    key={track.id}
                    track={track}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default TracksRelated