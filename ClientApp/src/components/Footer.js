import { Component } from "react";


export class Footer extends Component
{
    render() {
        return(
            <footer>
                <div id="leftFooter">&copy; 2000 - {new Date().getFullYear()}, ITWebNet</div>
                <div id="rightFooter">rightFooter</div>
            </footer>
        )
    }
}