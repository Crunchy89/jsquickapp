import axios from "axios";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Home = () => {
    const [Data,setData]=useState([]);
    const getApi=()=>{
        axios.get(`https://api.imgflip.com/get_memes`)
        .then(res=>{
            setData(res.data.data)
            console.log(res.data.data)
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
    useEffect(()=>{
        getApi()
        return ()=>{
            setData([])
        }
    },[])
    return (
        <>
        <div className="container mt-5">
            <h1>Meme Template Galery</h1>
            <hr />
        <div className="d-none d-md-block d-lg-block">
        <Splide
        options={ {
            type   : 'loop',
            perPage: 3,
            drag:true,
            autoplay:true,
            padding: '5rem',
            lazyLoad:true,
            pagination:false
        } }
        >
            {Data.memes ? Data.memes.map((row,i)=>(
                <SplideSlide key={i}>
            <img src={row.url} className="img-fluid" alt={row.url}/>
          </SplideSlide>
                )):''}
        </Splide>
        </div>
        <div className="d-md-none">
        <Splide
        options={ {
            type   : 'loop',
            drag:true,
            autoplay:true,
            lazyLoad:true,
            height:500,
            pagination:false
        } }
        >
            {Data.memes ? Data.memes.map((row,i)=>(
                <SplideSlide key={i}>
            <img src={row.url} className="img-fluid" alt={row.url}/>
          </SplideSlide>
                )):''}
        </Splide>
        </div>
        </div>
        </>
    );
};

export default Home;