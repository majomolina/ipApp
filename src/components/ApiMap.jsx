import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {Marker } from 'react-leaflet/Marker'
import 'leaflet/dist/leaflet.css'



const ApiMap = ({lat, lon}) => {
      return ( 
        <>
       
  <MapContainer className='mapImage' center={[lat,lon]}
   style={{ width: "500px", height: "400px" }} 
  zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat,lon]}>
    
    </Marker>
  </MapContainer>

        </>
     );
}
 
export default ApiMap;