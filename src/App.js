import Navbar from "./components/Navbar/Navbar";
import Heroimage from "./components/Heroimage/Heroimage";
import Section from"./components/Section/Section";
import React,{ useEffect,useState } from "react";
import {fetchTopAlbumData,fetchNewAlbums,fetchAllSongs} from "./API/API";
import Footer from "./components/Footer/Footer";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
// import Card from "./components/Card/Card";
function App() {
  const [topAlbumData,setTopAlbumData] = useState([]);
  const [newAlbumData,setNewAlbumData] = useState([]);
  const[songsData,setSongsData] =  useState([]);
  const[value,setValue]  = useState(0);
  const[filteredDataValues,setFilteredDataValues]=useState([]);

  const handleChange=(event,newVal)=>{
    console.log(newVal)
    setValue(newVal);
  }


  const generateSongsData=(value)=>{
    let key;
    if(value==0){
      filteredData(songsData);
      return;
    }
    else if(value==1){
      key ="rock";


    }
    else if(value==2){
      key = "pop";
    }

    else if(value==3){
      key ="jazz";
    }
    else if(value==4){
      key ="blues";
    }
    const result = songsData.filter((items)=>items.genre.key===key);
    filteredData(result);
    
  }

// console.log(topAlbumData);
const generateTopAlbums = async()=>{
  try{
    const d = await fetchTopAlbumData();
    // console.log(d);
    setTopAlbumData(d);

  }
  catch(e){
    console.log(e);

  }

}  

const generateNewAlbums = async()=>{
  try{
    const newAl = await fetchNewAlbums();
    // console.log(d);
    setNewAlbumData(newAl);

  }
  catch(e){
    console.log(e);

  }

}
const generateAllSongsData = async()=>{
  try{
    const d = await fetchAllSongs();
    console.log(d+" from generate all song datat in app.js");
    setSongsData(d);
    setFilteredDataValues(d);

  }
  catch(e){
    console.log(e);

  }

}  



const filteredData =(value)=>{
  setFilteredDataValues(value);
}

useEffect(()=>{

  generateTopAlbums();
  generateNewAlbums();
  generateAllSongsData();
},[]);    //here com

useEffect(()=>{

 generateSongsData(value)
},[value]);

  return (
   
    <div>
<Navbar />
<Heroimage />
{/* {
topAlbumData.map((topAlbum)=>(
  <Card data ={topAlbum} type="album" key={topAlbum.id} />
))} */}
<Section data={topAlbumData} title="Top Albums" type="album" filteredDataValues={topAlbumData}  />



<Section data={newAlbumData} title="New Albums" type="album" filteredDataValues={newAlbumData}  />


<div
  style={{
    background: 'var(--color-primary)',
    height: '1px',
    marginTop:'40px'
  }}
/>

<Section 
data= {songsData}
type = "songs"
title = "Songs"
filteredData={filteredData}
filteredDataValues={filteredDataValues}
value = {value}
handleChange = {handleChange}
/>

<Footer />
<MusicPlayer />
    </div>
  );
}

export default App;
