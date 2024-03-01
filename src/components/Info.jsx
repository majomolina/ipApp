
import ApiMap from './components/ApiMap.jsx';
import { Box,Image,Card } from '@chakra-ui/react';


const Info = () => {
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
        <Card>
 
        { ipProfile ? <>
          <h1>This is your IP Address: <br/> {currentIP}</h1>
        <h2>Country: {ipProfile?.location?.country} {country?.name}</h2>
        <h2>Internet Service Provider: {ipProfile?.as?.name} {ipProfile?.as?.domain}</h2>
        <h2>Website's URL: {ipProfile?.as?.domain} </h2>
        <h2>Internet Service Provider: {ipProfile?.isp}</h2>
    <Image
        boxSize='100px'
        objectFit='cover'
        src={country?.flag_url}
        alt=''
      />
        <ApiMap lat={ipProfile?.location?.lat} 
        lon={ipProfile?.location?.lng}/>
        </> : <h2>Press the button to show the information</h2>}  
    
     
    
        </Card>
      
       
       
        </>
     );
}
 
export default Info;