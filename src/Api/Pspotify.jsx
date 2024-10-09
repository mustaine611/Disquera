import { useEffect, useState } from 'react';

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


export class Cancion{
  constructor( nombre ,duration_ms, id    ){
    this.nombre = nombre
    this.duration_ms=duration_ms
    this.id     = id 
  }
}

export function getSounds ( token  ){ 
  const market = "ES"; 
  const limit = 10;     
  const offset = 5;  

  const idAlbum = "1zrVeZHRsPsRWdnQSuUIYG"
  return fetch(`https://api.spotify.com/v1/albums/${idAlbum}/tracks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, 
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.items); 
    return data.items
  })
  .catch(error => {
    console.error("Error fetching tracks:", error);
  });
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const Pspotify = () => {
    const  token = fetch("https://accounts.spotify.com/api/token", obj)
        .then((response => {
            return response.json()
        }))
        .then( json => {
          console.log(json.access_token) 
          return  json.access_token
        })
        .catch(error => console.error(error))
    return token 
    
}