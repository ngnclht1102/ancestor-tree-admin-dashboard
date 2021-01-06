export const get_resource = (state) =>
  state && state.admin && state.admin.resources
    ? state.admin.resources
    : undefined

export const get_data_of = (state, part) => {
  const resources = get_resource(state)
  const data =
    resources && resources[part]
      ? {
          ...resources[part].data
        }
      : undefined
  if (data) {
    delete data.undefined
    delete data.fetchedAt
  }
  return data
}
