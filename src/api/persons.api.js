import { authenticatedGet } from './helper'

export const get_tree_from_root = async () => {
  return await authenticatedGet('/admin/v1/persons/tree')
}

export const get_tree_from_person = async (person_id) => {
  return await authenticatedGet('/admin/v1/persons/tree/from/' + person_id)
}
