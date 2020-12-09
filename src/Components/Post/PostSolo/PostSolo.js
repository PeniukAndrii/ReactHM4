import React, {Component} from 'react';

class PostSolo extends Component {
    render() {
        let {item, match:{params:{id}}}=this.props
        return (
            <div>
                {item[id-1].id}-{item[id-1].title}
            </div>
        );
    }
}

export default PostSolo;