import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(()=> {
        const API_URL = 'https://localhost3001/album/${id}'
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
        }
        fetchData()
    }, [id])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i)=> {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })
        return (
            <div>
                <h2> The id passed was: {id} </h2>
                <p> Artist Data goes here!</p>
                {renderAlbums}
            </div>
        )
}      

export default ArtistView