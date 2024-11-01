import Typography from "@mui/material/Typography";
import { StyledNavBarContainer, StyledNavBarWrapper } from "./styles";

const NavBar = () => {
  return (
    <StyledNavBarContainer>
      <StyledNavBarWrapper>
        <Typography variant="h6" color="white">
          Blog
        </Typography>
      </StyledNavBarWrapper>
    </StyledNavBarContainer>
  );
};

export default NavBar;
