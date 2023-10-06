import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import { useForm } from "react-hook-form"
import usePlaylist from "../../hooks/usePlaylist"
import { useState } from "react"

const HeaderMusic = () => {

    const tracksPlaylist = useSelector(store => store.tracks)

    const { reset, handleSubmit, register } = useForm()

    const { postPlaylist } = usePlaylist()

    const [showModal, setshowModal] = useState(false)

    const handleModal = () => {
        setshowModal(!showModal)
    }

    const submit = (data) => {
        const obj = {
            ...data,
            tracks: tracksPlaylist.map(e => ({id: e.id}))
        }
        postPlaylist(obj)
        reset({
            title:'',
            to:'',
            message:''
        })
    }

  return (
    <header className="header">
        <h1 className="header__title">Gift Music</h1>
            <p onClick={handleModal} className="header__modal__button">My Playlist</p>
            <div className="header__container">
                <form onSubmit={handleSubmit(submit)} className={`header__modal ${showModal}`}>
                    <div className="header__rotation">
                        <div className="header__cassette">
                            <div>
                                <label className="header__label" htmlFor="title" ></label>
                                <input {...register('title')} className="header__input"  type="text" id='title' placeholder="Title" />
                            </div>
                            <div>
                                <label className="header__label" htmlFor="to" ></label>
                                <input {...register('to')} className="header__input" type="text" id='to' placeholder="To"/>
                            </div>
                            <div>
                                <label className="header__label" htmlFor="message"></label>
                                <textarea {...register('message')} className="header__input" id='message' placeholder="Message"/>
                            </div>

                        </div>
                        <div className="header__img">
                                <img className="header__background" src="/images/Cassette.png" alt="" />
                        </div>
                    </div>
                    <div className="header__list">
                        {
                            tracksPlaylist.map(track =>(
                                <TrackList 
                                    key={track.id}
                                    track={track}
                                />
                            ))
                        }
                    </div>
                    <button className="header__button">Create</button>
                </form>
            </div>
    </header>
    )
}

export default HeaderMusic