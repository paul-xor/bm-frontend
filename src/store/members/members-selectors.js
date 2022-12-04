export const selectMembersInfo = (state) => ({
  status: state.members.status,
  error: state.members.error,
  qty: state.members.list.length,
})

export const selectAllMembers = (state) => state.members.list

export const selectVisiableMembers = (state, { search = '', activity = '' }) => {
  if(activity === '') {
    return state.members.list.filter(
      member => {
        return (
          member.name.toLowerCase().includes(search.toLowerCase())
        )
      }
    )
  }
  return state.members.list.filter(
    member => {
      return (
        member.name.toLowerCase().includes(search.toLowerCase()) && member.activities.includes(activity)
      )}
  )
}