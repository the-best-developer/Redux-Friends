import React from 'react';
import { connect } from 'react-redux';
import getFriends from '../actions/Friends'

class FriendsList extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getFriends();
    }
    render() {
    return (
        <div>
            {this.props.friends.map((friend, id) => {
                return (
                    <div key={id}>
                        <h1>{friend.name}</h1>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                );
            })}
        </div>
    );
        }
};

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
  };

  export default connect(mapStateToProps, { getFriends })(FriendsList);