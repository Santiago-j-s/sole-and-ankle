import { createGlobalStyle } from "styled-components";

const GlobalVariables = createGlobalStyle`
 :root {
  --white: hsl(0deg, 0%, 100%);

  --gray-100: hsl(185deg, 5%, 95%);
  --gray-300: hsl(190deg, 5%, 80%);
  --gray-500: hsl(196deg, 4%, 60%);
  --gray-700: hsl(220deg, 5%, 40%);
  --gray-900: hsl(220deg, 3%, 20%);

  --primary: hsl(340deg, 65%, 47%);
  --secondary: hsl(240deg, 60%, 63%);

  --font-weight-normal: 500;
  --font-weight-medium: 600;
  --font-weight-bold: 800;
 }
`;

export default GlobalVariables;
