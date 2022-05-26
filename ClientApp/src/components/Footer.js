import { Component } from "react";


export class Footer extends Component
{
    render() {
        return(
            <div className="footer">
                <div className="centerFooter">
                    <div id="leftFooter">&copy; 2000 - {new Date().getFullYear()}, ITWebNet <br/>
                    Политика конфиденциальности
                    </div>
                    
                </div>
            </div>
        )
    }
}