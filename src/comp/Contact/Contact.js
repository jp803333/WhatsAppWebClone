import React from 'react';
import './Contact.css';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            lastChat: this.props.lastChat,
            lastChatTime: this.props.lastChatTime,
            ImgUrl: this.props.ImgUrl,
        };
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
            </div>
        )
    }
}
export default Contact;