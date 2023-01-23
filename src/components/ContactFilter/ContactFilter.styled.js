import styled from '@emotion/styled';

export const FindText = styled.label`
  margin-bottom: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  padding-top: 0;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};
`;

export const FindValue = styled.input`
  min-width: 416px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};

  background-color: ${props => props.theme.colors.input};

  height: 35px;
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  padding: 6px 10px;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::placeholder {
    font: inherit;
    font-size: 20px;
  }
`;
