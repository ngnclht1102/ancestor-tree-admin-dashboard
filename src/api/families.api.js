import { authenticatedGet } from './helper'

export const get_families_api = async () => {
  return await authenticatedGet('/admin/v1/families')
}
