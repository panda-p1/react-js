import React, { Component, PureComponent } from 'react'
import './ChatCreate.css'
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import {SimpleCard} from './PopUp'


export class ChatCreate extends Component {
    state = {
        active: false,
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
    getActive = () => this.setState({
        active: !this.state.active
    });
    render() {
        const {getName} = this.props
        // console.log(getName)
        // console.log(this.props)

        return (
            <div>
                <AddCircleOutlineTwoToneIcon onClick={this.toggleClass} style={{position:'absolute', top: '12%', left: '0.5%'}}/>
                <div ref={this.getRef} onClick={this.reaction} className={this.state.active ? 'b-popup' : 'toggle'}>
                    <SimpleCard toggle={this.state.active} getName={getName} getActive={this.getActive}/>
                </div>
            </div>

        )
    }

}



