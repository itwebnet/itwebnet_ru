import { Component } from "react";




export default class SiteContainerBlock extends Component
{    
    render()
    {
        const clr = "#FFFFFF";
        const isgrey = this.props.isgrey;        
        if (isgrey)
        {
           const clr = "#ebecee";
        }


        return(
            <div className="hrline" color={clr}>
            <div className="SiteContainerBlock">
                {this.props.children}
            </div>            
            </div>            
        );
    }
}

