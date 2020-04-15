import React from 'react';
import './LeftSection.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import Search from '../Search/Search';
class LeftSection extends React.Component {
    render() {
        return (
            <div className="left">
                <ProfileHeader/>
                <Search/>
            </div>
        )
    }
}
export default LeftSection;