import React from 'react'

const BrowserReducer = (state, {type, payload}) => {
    switch(type){
        case "NAME": 
        return {
            ...state,
            name: payload
        }
        case "TIME": 
        return {
            ...state,
            time: payload
        }
        case "MESSAGE": 
        return {
            ...state,
            message: payload >= 0 && payload < 12 ? "Good Morning" :  payload >= 12 && payload <= 17 ? "Good AfterNoon" : "Good Evening" 
        }
        case "TASK": 
        return {
            ...state,
            task: payload
        }
        case "CLEAR": 
        return {
            ...state,
            task: null
        }
        default: 
        return state
    }
  
}

export default BrowserReducer;


// Day 31 of #100DaysOfCode  accomplishments: Learned about React context, Reducer, and Global State management. Continuing Browser Extension project added new features.📷#WebDevelopment #MERN #React  📷📷📷📷 📷📷📷📷