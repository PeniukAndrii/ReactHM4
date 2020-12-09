import React, {Component} from 'react';
import UsersService from "../../Service/Users/UsersService";
import User from "../User/User";

class AllUser extends Component {
    UserService= new UsersService()
    state={users:[]}

    async componentDidMount() {
        let users=await this.UserService.getAllUser()
        this.setState({users})
    }

    render() {
    let {users}=this.state
        console.log(this.props)
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUser;