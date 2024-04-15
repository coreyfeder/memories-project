import { useEffect } from "react";
import { useDispatch } from "react-redux";

// import "./App.css";
import styles from "./styles.jsx";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import { getPosts } from "./actions/posts.jsx";
import memories from "./images/memories.png";


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts)
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar sx={styles.appBarStyle} position='static' color='inherit'>
        <Typography sx={styles.heading} variant='h2' align='center'>
          Memories
        </Typography>
        {/* <img sx={styles.image} src={memories} alt='memories' height='60' /> */}
        <img sx={styles.headingStyle} src={memories} alt='memories' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
