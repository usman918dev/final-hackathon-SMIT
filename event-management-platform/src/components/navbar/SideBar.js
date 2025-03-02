import React from 'react'
import { useState } from 'react'
export default function SideBar() {
    const [form, setform] = useState(false)
  return (
    <div>
      <button onClick={setform(!form)}>View</button>
        {form? "dstrgyuihojgyudtrbhjnm":"history"}
    </div>
  )
}
