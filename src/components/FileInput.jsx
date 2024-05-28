import React, { useState } from 'react'

function FileInput() {
  const [file, setFile] = useState()
  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }
  return (
    <input type="file" name='fileInput' onChange={handleFileChange} />
  )
}

export default FileInput