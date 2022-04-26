import { Typography } from "@mui/material";

const TitlePage = ({ content }) => {
  return (
    <Typography component="h2" variant="h4" marginTop={1}>
      {content}
    </Typography>
  );
};
export default TitlePage;
