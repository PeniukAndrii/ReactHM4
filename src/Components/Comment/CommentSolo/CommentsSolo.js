import React, {Component} from 'react';

class CommentsSolo extends Component {
    render() {
        let {item, match:{params:{id}}}=this.props
        return (
            <div>
                {item[id-1].id}-{item[id-1].name}
            </div>
        );
    }
}

export default CommentsSolo;