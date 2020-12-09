import React, {Component} from 'react';
import UsersService from "../../Service/Users/UsersService";
import User from "../User/User";
import {Route, Switch, withRouter} from "react-router-dom";
import UserSolo from "../User/UserSolo/UserSolo";

class AllUser extends Component {
    UserService= new UsersService()
    state={users:[]}

    async componentDidMount() {
        let users=await this.UserService.getAllUser()
        this.setState({users})
    }

    render() {
        let {match:{url}}=this.props;
        let {users}=this.state;
        console.log(url)
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                <div className={'block-inside'}>
                    <Switch>
                        <Route path={`${url}/:xxx`} exact={true} render={(props)=>{
                            return <UserSolo {...props} item={users}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUser);