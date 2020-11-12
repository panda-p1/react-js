import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './ChatCreate.css'
import Button from '@material-ui/core/Button';



export class SimpleCard extends Component {
    // useStyles = makeStyles({
    //     root: {
    //         // minWidth: 275,
    //         margin:'300px auto 0px auto',
    //         width:'240px',
    //         height: '130px',
    //         padding:'10px',
    //         backgroundColor: '#c5c5c5',
    //         borderRadius: '5px',
    //         boxShadow: '0px 0px 10px #000',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         justifyContent: "space-between"
    //     },
    // });


    getRef = (node) => this.el = node;

    getName = () => {
        // console.log(el)
        console.log(this.el.value)
        this.el.value = ''

    }

    render() {
        return (
            <Card className="card">
                <input type="text" placeholder="Enter the name" className="form_input" ref={this.getRef}/>
                <Button onClick={this.getName} variant="contained" className="submit-btn">Создать</Button>
            </Card>
        )
    }
}