import React from 'react';

function Footer(props){
    return(
        <div className="footer-container">
            <h4>Copyright all reserved</h4>
            <h5>Made by {props.name}</h5>
        </div>
    )
}
export default Footer;