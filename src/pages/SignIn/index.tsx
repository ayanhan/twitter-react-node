import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71C9F8",
    flex: "0 0 50%",
    overflow: "hidden",
    position: 'relative',
  },
  blueSideBigIcon: {
    position: 'absolute',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '310%',
    height: '310%',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: "none",
    margin: 0,
    padding: 0,
    width: 380,
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 650,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5)
  },
  loginFormControl: {
    marginBottom: theme.spacing(2)
  }
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();

  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
      <TwitterIcon
            color="primary"
            className={classes.blueSideBigIcon}
          />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Lorem ipsum dolor sit.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon} />
              Lorem ipsum dolor sit amet.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Delectus?
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography variant="h4">Lorem ipsum dolor sit.</Typography>
          <Typography>
            <b>Lorem ipsum dolor sit.</b>
          </Typography>
          <br />
          <Button
            onClick={handleClickOpenSignUp}
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            SignUp
          </Button>
          <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
            Login
          </Button>
          <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal} />
          <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal} />
        </div>
      </section>
    </div>
  );
};
