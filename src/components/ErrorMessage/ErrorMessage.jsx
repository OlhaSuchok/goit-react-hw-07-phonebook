import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { ErrorMessageText } from './ErrorMessage.styled';

export function ErrorMessage() {
  const error = useSelector(selectError);
  return <ErrorMessageText>{error}</ErrorMessageText>;
}
