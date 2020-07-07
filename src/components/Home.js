import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component {
 
    render() {
        const { blogs } = this.props;
        const blogList = blogs.length ? (
            blogs.map(blog => {
                return (
                    <div className="blog" key={blog.id}>
                        <Link to={'/'+blog.id}>
                            <span>{blog.title}</span>
                        </Link>
                        <p>{blog.body}</p>
                    </div>
                )
            })
        ) : (
            <div>No blogs yet</div>
        );
        
        return (
            <div className="container" >
                <h3>Home</h3>
                <div>{ blogList }</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(Home);