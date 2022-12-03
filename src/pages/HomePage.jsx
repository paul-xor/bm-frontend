import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

export const HomePage = () => {
  const navigate = useNavigate();

  const members = [];

  return (
    <>
      <Controls />

      <List>
            {members.map((c) => {
              const memberInfo = {
                img: c.image.png,
                name: c.name,
                info: [
                  {
                    title: 'Name',
                    description: c.name.toLocaleString(),
                  },
                  {
                    title: 'Age',
                    description: c.age,
                  },
                  {
                    title: 'Activity',
                    description: c.activity,
                  },
                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/member/${c.name}`)}
                  {...memberInfo}
                />
              );
            })}
          </List>
    </>
  );
};
