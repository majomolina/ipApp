import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react'

export default function GoBack() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return <Button 
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
  colorScheme='teal'
  onClick={handleClick}>&larr; Go Back</Button>;
}