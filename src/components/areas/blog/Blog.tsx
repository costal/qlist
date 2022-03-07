import React from 'react';
import BlogPost from "./BlogPost";
import styles from "./Blog.css";

const Blog = ({ gridName }) => {
    return (
        <div className={styles.blog}
             style={{gridArea: gridName}}>
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
    );
};

export default Blog;
