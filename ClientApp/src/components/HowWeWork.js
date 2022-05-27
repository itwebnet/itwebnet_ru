import { Component } from "react";
import imgStages from "../img/stages.svg";
import imgPrepare from "../img/prepare.svg";
import imgResearch from "../img/research.svg";


export default class HowWeWork extends Component
{
    render()
    {
        return(
            <div>
                <h1 className="h1black">Как мы работаем</h1>
                <div className="columnContainer">                
                    <div className="prepareBlock">
                        <h3>ПОДГОТОВКА</h3>
                        <div>Встречаемся. Обсуждаем цели и задачи проекта.</div>
                    </div>                
                    <div className="prepareImg"><img height="250px" src={imgPrepare} /></div>                
                    
                    <div className="stagesBlock"><img width="70px" src={imgStages}/></div>
                    <div className="researchImg"><img height="250px" src={imgResearch}/></div>
                    <div className="researchBlock">
                        <h3>ИССЛЕДОВАНИЯ</h3>
                        <div>Встречаемся. Обсуждаем цели и задачи проекта.</div>
                    </div>                
                    <div className="planBlock">
                        <h3>Планирование</h3>
                        <div>Встречаемся. Обсуждаем цели и задачи проекта.</div>
                    </div>
                    <div className="planImg"><img height="300px" src={imgResearch}/></div>
                    <div className="injectImg"><img height="300px" src={imgResearch}/></div>
                    <div className="supportImg"><img height="300px" src={imgResearch}/></div>
                    <div className="injectBlock">
                        <h3>Внедрение</h3>
                        <div>Встречаемся. Обсуждаем цели и задачи проекта.</div>
                    </div>
                    <div className="supportBlock">
                        <h3>Поддержка</h3>
                        <div>Встречаемся. Обсуждаем цели и задачи проекта.</div>
                    </div>                    
                </div>
            </div>
        );
    }
}

