import { Typography, TypographyProps } from "@mui/material";
const GradientText = (props: TypographyProps) => {
  return (
    <Typography
      {...props}
      sx={{
        background: (theme) =>
          `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {props.children}
    </Typography>
  );
};

export default GradientText;
