import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { Info } from '../components/Info'
import { selectVisiableMembers, selectMembersInfo } from '../store/members/members-selectors';
import { loadMembers } from '../store/members/members-actions'
import { selectControls } from '../store/controls/controls-selector'

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error, qty } = useSelector(selectMembersInfo)
  const { search, activity }  = useSelector(selectControls)
  const members = useSelector(state => selectVisiableMembers(state, {search, activity}))

  const thumbnailUrl = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80'

  useEffect(() => {
    if (!qty) {
      dispatch(loadMembers())
    }
  }, [qty, dispatch])

  return (
    <>
      <Controls />

      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading ... </h2>}
      {status === 'recieved' && (
        <List>
          {members.map((c) => {
            const memberInfo = {
              img: thumbnailUrl,
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
                  title: 'Activities',
                  description: c.activities.join(", "),
                }
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
      )}
      <Info count={members.length} />
    </>
  );
};
