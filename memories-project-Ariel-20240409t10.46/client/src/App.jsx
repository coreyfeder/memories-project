import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from './Components/Posts/Posts'
import Form from "./Components/Form/Form";
import styles from './styles.js'
import {useDispatch} from 'react-redux' 
import { useEffect } from "react";
import {getPosts} from './actions/posts.js'


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts)
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar sx={styles.appBar} position='static' color='inherit'>
        <Typography sx={styles.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img sx={styles.image} src={memories} alt='memories' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
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
