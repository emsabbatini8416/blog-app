import styled from "@emotion/styled";
import { NAV_BAR_HEIGHT } from "../utils/constants";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${NAV_BAR_HEIGHT}px calc(100% - ${NAV_BAR_HEIGHT}px);
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fafafa;
`;
