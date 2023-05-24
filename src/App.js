import React from 'react'
import { Navbar } from './components'
import { Header, Collection, Footer } from './container'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <div className="container">
                <Collection />
            </div>
            <Footer/>
        </div>
    )
}

export default App