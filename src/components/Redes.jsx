import React from 'react'
import apple from '../assets/AppleBlanco.png'
import facebook from '../assets/FacebookBlanco.png'
import instagram from '../assets/InstagramBlanco.png'
import youtube from '../assets/YoutubeBlanco.png'
import spotify from '../assets/SpotifyBlanco.png'
import spotifyNegro from '../assets/SpotifyNegro.png'
import facebookNegro from '../assets/FacebookNegro.png'
import instagramNegro from '../assets/InstagramNegro.png'
import youtubeNegro from '../assets/YoutubeNegro.png'
import appleNegro from '../assets/AppleNegro.png'

const Redes = ({ color = 'blanco' }) => {
    const icons = color === 'negro'
        ? {
            instagram: instagramNegro,
            facebook: facebookNegro,
            spotify: spotifyNegro,
            youtube: youtubeNegro,
            apple: appleNegro,
        }
        : {
            instagram: instagram,
            facebook: facebook,
            spotify: spotify,
            youtube: youtube,
            apple: apple,
        }
    return (
        <div className='flex flex-row gap-10 mt-5 items-center justify-center'>
            <a href='https://www.instagram.com/arturo.castro.nogueras?utm_source=qr&igsh=MWhsZGMzN3l1c2w0dQ==' target='_blank' rel='noreferrer'>
                <img className='hover:scale-110 transition-transform duration-300' src={icons.instagram} alt='Instagram' />
            </a>
            <a href='https://www.facebook.com/share/17P92PfCvf/' target='_blank' rel='noreferrer'>
                <img className='hover:scale-110 transition-transform duration-300' src={icons.facebook} alt='Facebook' />
            </a>
            <a href='https://open.spotify.com/artist/1zcDt0jeAEGYNULEzmSgJS?si=6AnzsnbOR6OoxmkW8NYk5A' target='_blank' rel='noreferrer'>
                <img className='hover:scale-110 transition-transform duration-300' src={icons.spotify} alt='Spotify' />
            </a>
            <a href='https://youtube.com/@arturoguitarra?si=VPKWYKwiQ65HLfKi' target='_blank' rel='noreferrer'>
                <img className='hover:scale-110 transition-transform duration-300' src={icons.youtube} alt='YouTube' />
            </a>
            <a href='https://music.apple.com/de/artist/arturo-castro-nogueras/1616938588?l=en-GB' target='_blank' rel='noreferrer'>
                <img className='hover:scale-110 transition-transform duration-300' src={icons.apple} alt='Apple Music' />
            </a>
            <a
                href='https://app.cicadamusic.net/concert/671b74074fe5141dd0c21a94/store'
                target='_blank'
                rel='noreferrer'
                className={`text-${color === 'negro' ? 'black' : 'white'} text-2xl font-medium text-lexend leading-none w-fit text-center hover:scale-110 transition-transform duration-300`}
            >
                /STORE
            </a>
        </div>
    )
}

export default Redes