export const selectMembersInfo = (state) => ({
  status: state.members.status,
  error: state.members.error,
  qty: state.members.list.length,
})

export const selectAllMembers = (state) => state.members.list