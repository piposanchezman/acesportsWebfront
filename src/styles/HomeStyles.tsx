import styled from "styled-components";

export const Text = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
  color: black;
`;

export const Description = styled.div<{ align: string }>`
  font-family: Inter, sans-serif;
  font-size: 16px;
  text-align: ${(props) => props.align};
  margin-top: 20px;
  color: #555;
  padding: 0 20px;
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
  grid-gap: 20px;

  @media (max-width: 1200px) {
    padding: 0 160px;
  }

  @media (max-width: 992px) {
    padding: 0 140px;
  }

  @media (max-width: 768px) {
    padding: 0 120px;
  }

  @media (max-width: 576px) {
    padding: 0 100px;
  }
`;

export const ItemsMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

export const Item = styled.img`
  width: 76px;
  max-width: 100%;
  object-fit: contain;

  &.small {
    width: 50px;
  }
`;
