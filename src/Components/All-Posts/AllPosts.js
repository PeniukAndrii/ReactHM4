import React, {Component} from 'react';
import {PostService} from "../../Service/Posts/PostService";
import Post from "../Post/Post";
import {withRouter, Switch, Route} from "react-router-dom";
import PostSolo from "../Post/PostSolo/PostSolo";
import '../../App.css'

class AllPosts extends Component {

    PostService = new PostService()
    state={posts:[]}

    async componentDidMount() {
        let posts= await this.PostService.getAllPost()
        this.setState({posts})
    }

    render() {
        let {posts}=this.state
        let {match:{url}}=this.props
        console.log(this.props)
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
                <div className={'block-inside'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact={this} render={(props)=>{
                            return <PostSolo {...props} item={posts}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
export default withRouter(AllPosts)