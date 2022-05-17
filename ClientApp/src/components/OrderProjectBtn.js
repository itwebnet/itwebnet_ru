import React, {Component} from 'react';
import { Alert, Button } from 'reactstrap';

export class OrderButton extends Component
{
    click()
    {
        Alert('Заказ проекта');
    }

    render()
    {
        return(
            <Button className='orderBtn' onClick={this.click}>Заказать проект</Button>
        );
    }
}