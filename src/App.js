import React,{useEffect,useState} from 'react'
import Index from './components/index/index';
import LoadingPage from './components/loading/load'
export default function App() {
    const [loading , setLoading] =  useState({"loading":true});
    useEffect(()=>{
    setLoading({"loading":false})
console.clear();
    console.error(" if you r not a developer please go out ,");
    alert(
    `welcome to pladtform v1.0.0 this virsion will have some issues we are gonna work on it ,enjoy
     @KHALED_BN_SELEEM:~`)
},[])


    return (
        <>
        {loading.loading === true ? <LoadingPage/> :   <Index/>}
        </>
    )
}
