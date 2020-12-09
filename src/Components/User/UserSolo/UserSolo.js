import React, {Component} from 'react';

class UserSolo extends Component {
    render() {
        let {item, match:{params:{xxx}}}=this.props
        console.log(this.props)
        return (
            <div>
                {item[xxx-1].name}
            </div>
        );
    }
}

export default UserSolo;