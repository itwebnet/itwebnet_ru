import { Component } from "react";



export default class OfferItem extends Component
{    
    render()
    {
        return(
            <div className="offerItem">
                <div>
                    <img src={this.props.img} />
                </div>
                <div>
                    <h3 className="offerName">{this.props.name}</h3>
                </div>
                <div className="offerDescription">
                    {this.props.title}
                </div>                
            </div>
        )
    }
} 