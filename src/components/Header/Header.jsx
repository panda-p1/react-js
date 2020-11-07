import './header.css'

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export class Header extends Component {

    render() {
        return(
            <div>

                <header className="header"><Link to='/profile' style={{textDecoration: 'none'}}><AccountCircleIcon/></Link></header>
            </div>
        )
    }
}