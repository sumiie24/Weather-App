const request= require('request')

const forecast= (latitude, longitude, callback) =>{
    const url= 'https://api.darksky.net/forecast/27bf3e47a4429f3714db7e295929dc44/'+latitude+','+longitude+'?units=si'

    request( {url,json:true}, (error,{body})=>{

        if(error){
            callback('No Internet Connection!!', undefined)
        }
        else if(body.error){
            callback('Unable to find location. Try another search!!', undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary+ " It is currently " +body.currently.temperature+ " degrees out. There is a " +body.currently.precipProbability+ "% chance of rain.")
        }
    })
}
module.exports=forecast