import React from 'react'
import { Navbar } from './components'
import { Header, Collection, Footer, About } from './container'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <div className="container">
                <Collection />
                <About />
            </div>
            <Footer />
        </div>
    )
}

export default App