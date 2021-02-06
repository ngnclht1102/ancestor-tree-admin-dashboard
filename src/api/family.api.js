import { authenticatedGet } from './helper'

export const getFamiliesForFilter = async () =>  {
  return await authenticatedGet('/admin/v1/families')
}
