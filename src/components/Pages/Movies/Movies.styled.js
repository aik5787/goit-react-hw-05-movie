import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesContainer = styled.div`
  padding: 20px;
`;

export const MoviesInput = styled.input`
  width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const MoviesButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
export const ListContainer = styled.div`
  padding-left: 20px;
`;

export const MoviePageList = styled.ul`
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin-bottom: 10px;
  font-size: 18px;

  &:hover {
    color: #007bff;
  }
`;
