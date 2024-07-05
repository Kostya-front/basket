import { useState } from 'react'

import Header from "./components/header";
import Catalog from "./components/catalog";
import './App.css'
import Modal from "./components/modal";

function App() {

  return (
    <>
      <Header/>

      <main className='main'>
        <Catalog />
      </main>

      {/*<Modal />*/}
    </>
  )
}

export default App