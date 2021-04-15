import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from '../Assets/favicon.ico'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    welcomeBack: {
        margin: "20px auto",
        textAlign: "center"
    },
    gapBeweenButton: {
        '& .MuiButton-label': {
            marginBottom: "12px",
        }
    },


}));

export default function SignIn(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setOpen1, setOpen } = props;
    const handleSubmitSignUp = () => {
        setOpen(false);
        setOpen1(true);
    }

    return (
        <Container component="main" maxWidth="xs">

            <Typography variant="h4" className={classes.welcomeBack}>
                Welcome Back
      </Typography>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <img
                        src={logo}
                        alt="logoImg"
                    />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} noValidate >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    // className={classes.borderRadiusField}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container justify="center" className={classes.gapBeweenButton}>
                        <Grid item xs={5}>
                            <Button >{"Forgot Password"}</Button>
                        </Grid>
                        <Grid item xs={8}>
                            <Button onClick={handleSubmitSignUp}>{"Don't have an account? Sign Up"}</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}
