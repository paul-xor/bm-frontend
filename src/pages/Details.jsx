import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const currentMember = null;

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentMember && <Info push={navigate} {...currentMember} />}
    </div>
  );
};
