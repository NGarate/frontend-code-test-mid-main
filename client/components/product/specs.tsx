import styled from 'styled-components';
import { Box, DataList, Heading } from '@radix-ui/themes';

const Container = styled(Box)`
  padding: var(--space-4);
  grid-area: specifications;
`;
const DataListRoot = styled(DataList.Root)`
  padding-top: var(--space-4);
`;
const StyledLabel = styled(DataList.Label)`
  color: var(--ice);
`;

type ProductProps = {
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
};

export default function ProductMain({ brand, weight, height, width, length, model_code, colour }: ProductProps) {
  return (
    <Container>
      <Heading as="h2" size="6">
        Specifications
      </Heading>
      <DataListRoot orientation="horizontal">
        <DataList.Item>
          <StyledLabel minWidth="88px">Brand</StyledLabel>
          <DataList.Value>{brand}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <StyledLabel minWidth="88px">Item weight (g)</StyledLabel>
          <DataList.Value>{weight}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <StyledLabel minWidth="88px">Dimensions (cm)</StyledLabel>
          <DataList.Value>{`${height} x ${width} x ${length}`}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <StyledLabel minWidth="88px">Item Model number</StyledLabel>
          <DataList.Value>{model_code}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <StyledLabel minWidth="88px">Colour</StyledLabel>
          <DataList.Value>{colour}</DataList.Value>
        </DataList.Item>
      </DataListRoot>
    </Container>
  );
}
