import { FaCoffee, FaQuestion } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0.5rem;
`;

export const CardContent = styled.div<{ totalCards: number, isSelected: boolean }>`
  height: 9rem;
  width: calc(100% / ${(props) => props.totalCards});
  margin: 0 0.2rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  transition: 0.5s;
  background: ${(props) => props.isSelected ? `radial-gradient(circle, ${props.theme.colors.success} 40%, ${props.theme.colors.primary});` : '#fff'};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;

  :hover {
    cursor: pointer;
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
    filter: brightness(0.8);
  }
`;

export const DoubtIcon = styled(FaQuestion)``;

export const CoffeeIcon = styled(FaCoffee)``;