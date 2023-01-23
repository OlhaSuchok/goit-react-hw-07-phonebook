import styled from '@emotion/styled';
import { AiOutlineUserAdd } from 'react-icons/ai';

export const ContactFormWrapper = styled.form`
  position: relative;
  display: flex;
  min-width: 400px;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.secondary};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  padding: 16px;

  margin-bottom: 20px;
`;

export const ContactFormText = styled.div``;

export const ContactFormFieldFirst = styled.input`
  height: 35px;
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};

  background-color: ${props => props.theme.colors.input};

  margin-bottom: ${props => props.theme.space[4]}px;
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

export const ContactFormFieldSecond = styled.input`
  height: 35px;
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};

  background-color: ${props => props.theme.colors.input};
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

export const ContactFormButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  background-color: transparent;
  border: none;
`;

export const AiOutlineUserAddIcons = styled(AiOutlineUserAdd)`
  color: ${props => props.theme.colors.icons};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.iconsHover};
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
