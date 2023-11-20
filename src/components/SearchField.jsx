import React from 'react'
import { Divider, IconButton, Card } from 'ui-neumorphism';


const SearchField = () => {
  return (
    
        <div className="full-container d-flex align-items-center">
            <div className='form-container'>
                <form >
                    <input className='serach-field' type="text" />
                    

                    <label ></label>

                </form>
            <div className='button-container mt-3 col-2 d-flex'>   
                <IconButton className="next-neuro" text={false} size='large' color='var(--warning)'>NEXT</IconButton>
                <IconButton className="previous-neuro" text={false} size='large' color='var(--warning)'>PREVIOUS</IconButton>

            </div> 
            </div>
            </div>
   
  )
}

export default SearchField