import React, { useState } from 'react'
import Header from './Header'
import Tabs from './Tabs'

function Community() {
  const [helpCentre, setHelpCentre] = useState(false)
  return (
    <div>
        <Header setHelpCentre={setHelpCentre}/>
        {!helpCentre && <Tabs />}
    </div>
  )
}

export default Community