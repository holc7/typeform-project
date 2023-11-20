import React from 'react'
import HeadingAndQuestion from './HeadingAndQuestion'
import SearchField from './SearchField'
import { Button, Card } from 'ui-neumorphism';

const MainContainer = () => {
  return (
    <> <Card bordered >
        <div className="container my-4">
        <div className="row justify-content-center">
            <div className="second-container col-12 col-md-12 col-lg-12">
            <HeadingAndQuestion />
            <SearchField />
            </div>
            </div>
            </div>
        </Card>    
    </>

  
  )
}

export default MainContainer