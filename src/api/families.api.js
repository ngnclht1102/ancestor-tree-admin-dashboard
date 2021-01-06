import { unauthenticatedPost } from './helper'

export const login = async ({ email, password }) => {
  return await unauthenticatedPost(
    '/admin/public/login',
    {
      email,
      password
    },
    true
  )
}
