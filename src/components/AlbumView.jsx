import { useState, useEffect } from "react";

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = ([])

    useEffect(()=>{
        const API_URL = `http://localhost:3001/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')

    const renderSongs = justSongs.map((song, i ) =>{
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return (
        <div>
            {renderSongs}
        </div>
    )
}

export default AlbumView