import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import './ChatCreate.css'
import Button from '@material-ui/core/Button';



export class SimpleCard extends Component {
    getRef = (node) => this.el = node;
    render() {
        const { getActive } = this.props
        const { getName } = this.props
        return (
            <Card className={`card`}>
                <input type="text" placeholder="Enter the name" className="form_input" ref={this.getRef}/>
                <Button onClick={() => {getName(this.el); getActive()}} variant="contained" className={`submit-btn`}>Создать</Button>
            </Card>
        )
    }
}