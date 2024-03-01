import axios from "axios";

export const get_geo_api = (ip_address) => {
    const api_key = process.env.REACT_APP_API_KEY ;
    console.log('LLAVE',process.env.REACT_APP_API_KEY)
   return axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip_address}`)
    .then((response) =>{
        if(response.data){
            return (response.data)
        }
    })
}

export const get_public_api = () => {
 
   return axios.get(`https://api.ipify.org/?format=json`)
    .then((response) =>{
        if(response.data){
            return (response.data)
        }
    })
}

export const get_country_info = (country_code) => {
 
    return axios.get(`https://restcountries.com/v3.1/alpha/${country_code}`)
     .then((response) =>{
         if(response.data){
            const info = {'name':response.data[0]['name']['common'],
            'flag_url':response.data[0]['flags']['png']}
            
             return info
         }
     })
 }