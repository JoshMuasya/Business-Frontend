import React from 'react'

const page = ({ params }) => {
  return (
    <div>
        Feenote: { params.name }
    </div>    
  )
}

export default page