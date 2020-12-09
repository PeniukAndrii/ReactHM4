import React, {Component} from 'react';
import {PostService} from "../../Service/Posts/PostService";
import Post from "../Post/Post";


class AllPosts extends Component {

    PostService = new PostService()
    state={posts:[]}

    async componentDidMount() {
        let posts= await this.PostService.getAllPost()
        this.setState({posts})
    }

    render() {
        let {posts}=this.state
        console.log(this.props)
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        );
    }
}
export default AllPosts;