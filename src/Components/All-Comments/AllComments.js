import React, {Component} from 'react';
import CommentsService from "../../Service/Comments/CommentsService";
import Comment from "../Comment/Comment";

class AllComments extends Component {
    CommentsService = new CommentsService()
    state={comments:[]}

    async componentDidMount() {
        let comments= await this.CommentsService.getAllComments()
        this.setState({comments})
    }

    render() {
        let {comments}=this.state
        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllComments;