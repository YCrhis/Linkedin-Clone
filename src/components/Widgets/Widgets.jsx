import React from 'react'
/* style */
import './widgest.css'
/* icons */
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newArticle = (heading, subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">   
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon/>
            </div>
            {newArticle("Holiday is Back", "Top new 10")}
            {newArticle("Tulio Triviño no vuelve", "Top new 80")}
            {newArticle("Now all is changuing", "Top new 110")}
            {newArticle("Holiday is Back", "Top new 10")}
            {newArticle("Tulio Triviño no vuelve", "Top new 80")}
            {newArticle("Now all is changuing", "Top new 110")}
        </div>
    )
}

export default Widgets
