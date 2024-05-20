import { useTheme } from "@mui/material";

const GradientSpan = ({ children }: { children: string }) => {
  const theme = useTheme();
  return (
    <span
      key={theme.palette.primary.main + theme.palette.secondary.main}
      style={{
        background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
};

export default GradientSpan;
