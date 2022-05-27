import { Component } from "react";
import styles from "./custom.css"



export default class SiteContainerBlock extends Component
{    
    render()
    {
        return(
            <div className="hrline">
            <div className="SiteContainerBlock">
                {this.props.children}
            </div>            
            </div>
            
        );
    }
}

