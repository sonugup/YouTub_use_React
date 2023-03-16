import React,{createContext, useState, useEffect} from 'react'
import {fetchYoutubapi} from "../uliti/Api"

export const Context=createContext();
export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileM, setmobileM]= useState(false);

    useEffect(() => {
        fetchCategory(selectCategories)
    }, [selectCategories])

    const fetchCategory=(query) => {
        setLoading(true)
        fetchYoutubapi(`search/?q=${query}`).then(({contents}) => {
            // console.log(contents);
            setSearchResult(contents);
            setLoading(false);
        }).catch((e) => {
            console.log(e)
        })
    }
    
  return (
    <Context.Provider
    value={{
        loading,
        setLoading,
        searchResult,
        setSelectCategories,
        selectCategories,
        mobileM,
        setmobileM,
    }}
    >
     {props.children}   
    </Context.Provider>
  )
}

