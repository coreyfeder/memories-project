import { createTheme } from "@mui/material/styles";

const styles = (theme) => {
  ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(2),
    },
    form: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    fileInput: {
      width: "97%",
      margin: "10px 0",
    },
    buttonSubmit: {
      marginBottom: 10,
    },
  });
};

export default styles

// root: {
//   '& .MuiTextField-root': {
//     margin: theme.spacing(1),
//   },
// },

// const theme = createTheme({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//     },
//   },
// });

// const formStyles = {
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//     },
//   },
//   paper: {
//     padding: theme.spacing(2),
//   },
//   form: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   fileInput: {
//     width: "97%",
//     margin: "10px 0",
//   },
//   buttonSubmit: {
//     marginBottom: 10,
//   },
// };


