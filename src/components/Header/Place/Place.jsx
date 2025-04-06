import { useContext } from 'react'
import '../../../styles/components/Place.scss'
import { WeatherContext } from '../../../context/'

export const Place = () => {
    const { place } = useContext(WeatherContext)
    return <div className="Place">
        <i className='bi bi-geo-alt-fill'></i><p><strong>{place.name}, </strong>{place.country}</p>
    </div>
}