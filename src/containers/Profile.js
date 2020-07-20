import React from 'react'

class Profile extends React.Component {

render() {
    return (
        <div>
            Welcome {this.currentUser}
        </div>
    );
}

}

export default Profile;