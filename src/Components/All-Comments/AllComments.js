import React, {Component} from 'react';
import CommentsService from "../../Service/Comments/CommentsService";
import Comment from "../Comment/Comment";
import {withRouter, Switch, Route} from "react-router-dom";
import CommentsSolo from "../Comment/CommentSolo/CommentsSolo";
import '../../App.css'

class AllComments extends Component {
    CommentsService = new CommentsService()
    state={comments:[]}

    async componentDidMount() {
        let comments = await this.CommentsService.getAllComments()
        this.setState({comments})
    }

    render() {
        let {comments}=this.state
        let {match:{url}}=this.props
        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
                <div className={'block-inside'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} render={(props)=>{
                        return <CommentsSolo {...props} item={comments}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllComments)