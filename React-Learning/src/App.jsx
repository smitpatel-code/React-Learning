import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateHook from './stateHook'
import ContextHook from './contextHook'
import UseEffect from './useEffect'
import UseMemo from './useMemo'
import FirstExample from './useContext'
import Example from './useContext'
import ClickCapture from './DOM_Events/onClickCapture'

const App = () => {
  return(
    <ClickCapture/>
  )
}


export default App
