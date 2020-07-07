import React, {Component} from 'react'
import {connect} from 'react-redux'

class Blog extends Component{
    
    handleClick = () => {
        this.props.deleteBlog(this.props.blog.id);
        this.props.history.push('/');
    }

    render() {
        const blog = this.props.blog ? (
            <div>
                <div className="blog-detail">
                    <h4>{this.props.blog.title}</h4>
                    <p>{this.props.blog.body}</p>
                </div>
                <button onClick={this.handleClick}>Delete Blog</button>
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


const mapDispatchToProps = (dispatch) =>  {
    return {
        deleteBlog: (id) => {
            dispatch({type: 'DELETE_BLOG', id: id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);