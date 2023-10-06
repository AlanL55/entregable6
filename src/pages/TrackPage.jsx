import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import TrackInfo from "../components/TrackPage/TrackInfo"
import TracksRelated from "../components/TrackPage/TracksRelated"

const TrackPage = () => {


    const { id } = useParams()

    const [ track, getTrack ] = useFetch()

    useEffect(() => {
        getTrack(`/api/tracks/${id}`)
    }, [id])

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="track__page">
            <div className="track__back" onClick={handleBack}>↩ Back</div>
            <TrackInfo 
                track={track}/>
            <TracksRelated 
                artist={track?.artists[0].name}/>
        </div>
    )
}

export default TrackPage