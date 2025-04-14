import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { useGif } from './useGif';

// const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
export const Tag = () => {
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState()
    

    // async function fetchData() {
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`; 

    //     const {data} = await axios.get(url) 
    //     //console.log(data);
    //     const imgSource = data.data.images.downsized_large.url;
    //     //console.log(imgSource)
    //     setGif(imgSource)
    //     setLoading(false)
        
    // }



    // useEffect(()=>{
    //     fetchData();
    // },[])


    // function clickHandler(){
    //     fetchData();

    // } 


    const {gif, loading, fetchData} = useGif(tag)
    
    return (
    <div className='w-1/2 border-black bg-blue-500 rounded-lg flex flex-col items-center gap-[15px] mt-[25px]'>
        <h2 className='text-1xl uppercase font-bold'>A Rendom gif</h2>

        {
            loading ? (<Spinner/>):(<img src={gif} width={450}/>)
        }

        <input
         className='w-10/12 text-lg py-2 bg-white text-center rounded-lg mb-[3px] cursor-pointer'
         value={tag}
         onChange={(event)=>{setTag(event.target.value)}}
         ></input>


        <button 
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[25px] cursor-pointer "
        >Generate</button>
    </div>
  )
}
