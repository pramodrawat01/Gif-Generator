import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { useGif } from './useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
export const Rendom = () => {
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false)
    
    

    // async function fetchData() {
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //     const {data} = await axios.get(url) 
    //     //console.log(data);
    //     const imgSource = data.data.images.downsized_large.url;
    //     //console.log(imgSource)
    //     setGif(imgSource)
    //     setLoading(false)
        
    // }

    // function clickHandler(){
    //     fetchData();

    // } 

    const {gif, loading, fetchData} = useGif()

    // useEffect(()=>{
    //     fetchData();
    // },[])

    
    return (
    <div className='w-1/2 border-black bg-green-500 rounded-lg flex flex-col items-center gap-[15px] mt-[25px]'>
        <h2 className='text-1xl uppercase font-bold'>Rendom gif</h2>

        {
            loading ? (<Spinner/>):(<img src={gif} width={450}/>)
        }

        <button 
        onClick={()=>fetchData()}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[25px] cursor-pointer "
        >Generate</button>
    </div>
  )
}
