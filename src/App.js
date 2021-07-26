import { Button, Typography } from "@material-ui/core";
// import { custom_theme } from "./assets/theme";
// import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "./components/Buttons/CustomButton";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    width: '100%',
    height: '100%',
  }
}));



function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <ThemeProvider theme={custom_theme}> */}
      <Typography> Aplicação em desenvolvimento</Typography>
      <Button variant="contained" color="primary">Primária</Button>
      <Button variant="contained" color="secondary">Secundária</Button>
      <CustomButton variant="contained" text="Success" type="success"></CustomButton>
      <CustomButton variant="contained" text="Error" type="error"></CustomButton>
      <CustomButton variant="contained" text="Info" type="info"></CustomButton>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
