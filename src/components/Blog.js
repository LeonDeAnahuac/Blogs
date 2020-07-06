import React, {Component} from 'react'
import {connect} from 'react-redux'

class Blog extends Component{
    
    render() {
        console.log(this.props.blog);
        const blog = this.props.blog ? (
            <div>
                <h4>{this.props.blog.title}</h4>
                <p>{this.props.blog.body}</p>
            </div>
        ) 
        : (<div>Loading blog...</div>);
        return (
            <div className="container">
                { blog }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.blog_id;
    return {
        blog: state.blogs.find(blog => blog.id === id)
    }
}

export default connect(mapStateToProps)(Blog);