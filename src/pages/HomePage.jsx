import { useSelector } from "react-redux"
import TrackCard from "../components/HomePage/TrackCard"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"


const HomePage = () => {

  const [ listTracks, getListTracks ] = useFetch()
  const [inputValue, setInputValue] = useState('ricardo arjona')
  const [quantityPerPage, setQuantityPerPage] = useState(10)
  
  useEffect(() => {
    getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  }, [inputValue, quantityPerPage])

  const inputSearch = useRef()

  const handleSearch = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  } 
  const handleTracksPerPage = (e) => {
    setQuantityPerPage(e.target.value)
  }
  return (
      <div className="home__page">
        <div className="home__container">
          <form className="home__form" onSubmit={handleSearch} action="">
            <input className="home__input" ref={inputSearch} type="text" placeholder="Search" />
            <select className="home__select" onChange={handleTracksPerPage} defaultValue={10}>
                {
                  [2, 4, 6, 8, 10].map(tracksPerPage => (
                    <option
                      key={tracksPerPage}
                      value={tracksPerPage}>
                      {tracksPerPage}
                      </option>
                  ))
                }
            </select>
          </form>
          <div className="home__trackList">
            {
              listTracks?.tracks.items.map(track => (
                <TrackCard 
                  key={track.id}
                  track={track}
                />
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default HomePage