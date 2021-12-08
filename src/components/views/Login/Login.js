import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Login = () => (

  <div>
    <h2 className={styles.header}>Log In</h2>
    <Paper className={styles.component}>
      <form>
        <TextField className={styles.loginput} id="standard-basic" label="Nick" variant="standard" />
        <TextField className={styles.loginput} id="standard-basic" label="Password" variant="standard" />
      </form>
      <Button className={styles.logbutton} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/panel/`}>Submit</Button>
    </Paper>
  </div>
);

export default Login;
