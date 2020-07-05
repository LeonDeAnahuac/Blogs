import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component {
 
    render() {
        console.log(this.props.blogs);
        const { blogs } = this.props;
        const blogList = blogs.length ? (
            blogs.map(blog => {
                return (
                    <div key={blog.id}>
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
            <div>
                <h4>Home</h4>
                <p>Esto es home</p>
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