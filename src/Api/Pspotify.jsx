 

var obj = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    body: new URLSearchParams(
        {
            'grant_type': "client_credentials",
            'client_id' : 'd8e4c52ef5cb4644998d1a6b14d35e2c',
            'client_secret' : 'ea52bde724294073bf9361b824382904'
        }
    )


}



export  const Pspotify = () => {
    const  token = fetch("https://accounts.spotify.com/api/token", obj)
        .then((response => {
            return response.json()
        }))
        .then( json => {console.log(json)})
        .catch(error => console.error(error))
    return token 
    
}
