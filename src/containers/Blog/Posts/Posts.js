import React, { Component } from "react";

import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
    state={
        posts:[]
    }

    componentDidMount(){
        axios.get("/posts")
        .then(response => {
            this.setState({
              posts: response.data  
            }) 
        })
        .catch(error => {
          console.log(error)
        })
    }

    postSelectHandler = (id) => {
        this.setState({
            postSelectedId: id
        })
    }

    render(){
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
            <section className="Posts">
                   { updatedPosts }
                </section>
        )
    }
}

export default Posts;