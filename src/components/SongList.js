import React, { useState } from 'react'
import uuid from 'uuid/v1'

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Help!', id: 1 },
        { title: 'Day in the life', id: 2 },
        { title: 'Lucy in the sky with diamonds', id: 3 },
    ])

    const addSong = () => {
        setSongs([...songs, { title: 'new song', id: uuid()}])
    }
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
            <button onClick={addSong}>Add a song</button>
        </div>
    )
}

export default SongList