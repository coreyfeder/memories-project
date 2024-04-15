import React from "react"
import { useDispatch } from "react-redux";

import makeStyles from "./styles.jsx"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { DeleteIcon, MoreHorizIcon, ThumbUpAltIcon } from "@mui/icons-material/ThumbUpAlt";
import moment from "moment";


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = makeStyles();

  return (
    <p>This is a Post!</p>
    /*
        <Card sx={classes.card}>
          <CardMedia sx={classes.media} image={post.selectedFile || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} title={post.title} />
          <div sx={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>
          <div sx={classes.overlay2}>
            <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
          </div>
          <div sx={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          <Typography sx={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
          </CardContent>
          <CardActions sx={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
            <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
          </CardActions>
        </Card>
  */
  );
};

export default Post;
