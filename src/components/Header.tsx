import styled from "styled-components";
import Logo from "./Logo";

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 300px;
  box-shadow: 0 0 10px -7px white;

  ${Logo} {
    margin-right: 100px;
  }
`;

export default Header;