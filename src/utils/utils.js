
export function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const activities = {
  '1': 'Hiking',
  '2': 'Running',
  '3': 'Biking',
}

export function randActivity(numb) {
  if (numb === 3) {
    return ['Hiking', 'Running', 'Biking']
  } else if (numb === 2) {
    let r2 = randomNumber(1, 3)
    const r1 = randomNumber(1, 3)
    if(r1 === 1) r2 = randomNumber(2,3)
    if(r1 === 3) r2 = randomNumber(1,2)
    if(r1 === r2) r2--
    return [activities[r1], activities[r2]]
  }
  const rand = randomNumber(1, 3)
  return [activities[rand]]
}
