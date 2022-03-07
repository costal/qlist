import React from 'react';
import styles from "./BlogPost.css";

const BlogPost = () => {
    return (
        <div className={styles.blogPostContainer}>
          <span>Avatar</span>
          <div className={styles.blogPost}>
            <h2>Why you have a low IQ: Why that's okay!</h2>
            <span>Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that. Expenses own moderate day fat trifling stronger sir domestic feelings. Itself at be answer always exeter up do. Though or my plenty uneasy do. Friendship so considered remarkably be to sentiments. Offered mention greater fifteen one promise because nor. Why denoting speaking fat indulged saw dwelling raillery. </span>
            <div className={styles.bottomInfo}>
              <span>Psychometrics, Development</span>
              <span>...More</span>
            </div>
          </div>
        </div>
    );
};

export default BlogPost;
