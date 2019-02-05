import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
    state={
        posts:[],
        postSelectedId: null,
        error: false
    }

    postSelectHandler = (id) => {
        this.setState({
            postSelectedId: id
        })
    }

    componentDidMount(){
        axios.get("/posts")
        .then(response => {
            this.setState({
              posts: response.data  
            }) 
        })
        .catch(e => {
            this.setState({
                error: true
            })
        })
    }

    render () {
        let updatedPosts = <p style={{textAlign: "center"}}>Something went wrong!</p>
        if(!this.state.error){
            updatedPosts = this.state.posts.slice(0,4).map(post => <Post 
                key={post.id} 
                title={post.title} 
                author="Surya" 
                clicked={() => this.postSelectHandler(post.id)}
            />)
        }

        return (
            <div>
                <section className="Posts">
                   { updatedPosts }
                </section>
                <section>
                    <FullPost id={this.state.postSelectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;