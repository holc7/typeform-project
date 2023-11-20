import React from 'react'
import { Card, CardContent , Subtitle2, H5, Body2, CardAction, Button   } from 'ui-neumorphism';
import { overrideThemeVariables } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import { Divider, IconButton } from 'ui-neumorphism';



const HeadingAndQuestion = () => {
  return (
    
            <div className="container-1">
        <div className="row">
            <div className="col-12  text-center">
            <h2>WELCOME TO THE QUESTIONNAIRE</h2>
            </div>
        </div>
        <div className="two-question-container d-flex  align-items-center">
            <div className="col-3 ">
            <h4 className='question-text'>QUESTION 1</h4>
            
            <p>WHAT IS YOUR NAME?</p>
            </div>
        </div>
        </div>
   


  )
}

export default HeadingAndQuestion