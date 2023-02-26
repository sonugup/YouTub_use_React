import React,{createContext, useState, useEffect} from 'react'
import {fetchYoutubapi} from "../uliti/Api"

export const Context=createContext();
export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobile, setMobile]= useState(false);

    useEffect(() => {
        fetchCategory(selectCategories)
    }, [selectCategories])

    const fetchCategory=(query) => {
        setLoading(true)
        fetchYoutubapi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents)
            setSearchResult(contents)
            setLoading(false)
            
        })
    }
  return (
    <Context.Provider
    value={{
        loading,
        setLoading,
        searchResult,
        selectCategories,
        setSelectCategories,
        mobile,
        setMobile,
    }}
    >
     {props.children}   
    </Context.Provider>
  )
}


