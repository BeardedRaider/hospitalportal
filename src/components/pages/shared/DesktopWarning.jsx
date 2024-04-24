import React from 'react'
import '../../../styles/desktopWarning.css'


const DesktopWarning = () => {
  return (
    // This section of the code is responsible for displaying a warning message to the user. It informs the user that they need to use a tablet or mobile device to access the portal. The warning message is displayed in a div with the class 'desktop-warning'. The div contains a header with the text 'Tablet or Mobile Device Required' and a paragraph with the text 'Please use a tablet or mobile device to access this portal.'
    <div className="desktop-warning">
        <div className="content">
            
            <h1>Tablet or Mobile Device Required</h1>
            <p>Please use a tablet or mobile device to access this portal.</p>
        </div>    
    </div>
  )
}

export default DesktopWarning;