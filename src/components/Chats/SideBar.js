import React, {Component} from 'react';

export default class SideBar extends Component {
    render() {
        const {chats, activeChat, user, setActiveChat, logout} = this.props
        return (
            <div id="side-bar">
                <div className="heading">
                </div>
                <div className="menu">
                </div>
            </div>
        )
    }
}