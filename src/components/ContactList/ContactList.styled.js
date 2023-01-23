import styled from '@emotion/styled';
import { MdDeleteOutline } from 'react-icons/md';

export const ContactsList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  background-color: ${props => props.theme.colors.secondary};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  padding: 16px;
  list-style: none;
  width: 400px;
  height: 350px;
  overflow: auto;
`;

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.text};

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`;

export const ContactListButtonDelete = styled.button`
  background-color: transparent;
  border: none;
`;

export const ContactListTextWrapper = styled.div`
  background-color: ${props => props.theme.colors.item};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  width: 302px;
  padding: 6px 10px;
`;

export const ContactListItemName = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const ContactListItemPhone = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const MdDeleteOutlineIcons = styled(MdDeleteOutline)`
  color: ${props => props.theme.colors.icons};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.iconsHover};
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
