import {createContext,useContext,useEffect,useState} from 'react';
const Context=createContext(null);
export function FavoritesProvider({children}){const [favorites,setFavorites]=useState(()=>{try{return JSON.parse(localStorage.getItem('hidden-lanka-favorites')||'[]')}catch{return []}});useEffect(()=>localStorage.setItem('hidden-lanka-favorites',JSON.stringify(favorites)),[favorites]);const toggle=(slug)=>setFavorites(prev=>prev.includes(slug)?prev.filter(x=>x!==slug):[...prev,slug]);return <Context.Provider value={{favorites,toggle}}>{children}</Context.Provider>}
export const useFavorites=()=>useContext(Context);
