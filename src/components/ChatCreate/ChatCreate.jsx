import React, { Component } from 'react'
import './ChatCreate.css'
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";

import {SimpleCard} from './PopUp'




export class ChatCreate extends Component {
    state = {
        active: false
    }
    toggleClass = () => {
        const currentState = this.state.active
        this.setState({
            active: !currentState
        })
    }
    reaction =() => {
        if (event.target === this.el)
            this.toggleClass()
    }
    getRef = (node) => this.el = node;
    render() {
        return (
            <div>
                <AddCircleOutlineTwoToneIcon onClick={this.toggleClass} style={{position:'absolute', top: '12%', left: '265px'}}/>
                <div ref={this.getRef} onClick={this.reaction} className={this.state.active ? 'b-popup' : 'toggle'}>
                    <SimpleCard/>
                </div>
            </div>

        )
    }
}