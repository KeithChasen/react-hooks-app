import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Help!', id: 1 },
        { title: 'Day in the life', id: 2 },
        { title: 'Lucy in the sky with diamonds', id: 3 },
    ])

    const [age, setAge] = useState(20)

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid()}])
    }

    useEffect(() => {
        console.log('Use effect hook', songs)
        //second param is showing what we're limiting this hook by
    }, [songs] )

    useEffect(() => {
        console.log('Use effect hook', age)
        //second param is showing what we're limiting this hook by
    }, [age] )

    return (
        <div className="song-list">
            <ul>
                {
                    songs.map(song => {
                        return (
                            <li key={song.id}>
                                {song.title}
                            </li>
                        )
                    })
                }
            </ul>
            <NewSongForm addSong={addSong}/>
            <div>Age: {age}</div>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    )
}

export default SongList