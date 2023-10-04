import { Headercontainer, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <Headercontainer>
      <StyledNavLink to="/goit-react-hw-05-movie/">Home</StyledNavLink>
      <StyledNavLink to="/goit-react-hw-05-movie/movies">Movies</StyledNavLink>
    </Headercontainer>
  );
};
export default Header;
