import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Todo(props) {
  return (
    <div>



<ArrowCircleRightIcon/>
{props.input}

<DeleteIcon/>


    </div>
  )
}
