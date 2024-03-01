import './App.css'
import {get_public_api, get_geo_api,get_country_info} from './services/Services.jsx'
import {useState } from 'react';
import ApiMap from './components/ApiMap.jsx';
import { Box,Image,Card } from '@chakra-ui/react';


function App() {
  const [currentIP, SetCurrentIP]= useState();
  const [ipProfile, setIpProfile]= useState();
  const [country, setCountry]= useState();
  

  const handleClick = () =>{
    get_public_api().then((ip)=>{
      console.log(ip)
      SetCurrentIP(ip.ip)
      //call ip profile
      GetIpProfile(ip.ip)
   
    })
  };

  const GetIpProfile = (ip_address) => {
    get_geo_api(ip_address).then((ip) => {
      console.log(ip)
      setIpProfile(ip)
      get_country_info(ip.location.country).then((country) => {
        console.log(country)
        setCountry(country)
      })

    })
  }

  return (
    <>
   <div>
   <Box
    onClick={handleClick}
  as='button'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, teal.500, green.500)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}
>
Show IP
</Box>
<Card className='cardContent'>
{ ipProfile ? <>
      <h1>This is your IP Address: <br/> {currentIP}</h1>
     
    <h2>Country: {country?.name}</h2>
    <img className='flatImage' src={country?.flag_url} alt="" />
    <h3>Internet Service Provider: {ipProfile?.as?.name} {ipProfile?.as?.domain}</h3>
    <h3>Website's URL: {ipProfile?.as?.domain} </h3>
    <h3>Internet Service Provider: {ipProfile?.isp}</h3>

    <ApiMap 
    lat={ipProfile?.location?.lat} 
    lon={ipProfile?.location?.lng}/>
    </> : <h2>Press the button to show the information</h2>}  

</Card>
  
 
   </div>
   
    </>
  )
}

export default App


 
