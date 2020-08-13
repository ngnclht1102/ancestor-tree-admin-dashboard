export const loadAccessToken =  () => localStorage.getItem('X-ACCESS-TOKEN')
export const setAccessToken =  (value) => localStorage.setItem('X-ACCESS-TOKEN', value)
export const removeAccessToken = () =>  localStorage.removeItem('X-ACCESS-TOKEN')

export const setAdminName =  () => localStorage.getItem('X-ADMIN-NAME')
export const getAdminName =  (value) => localStorage.setItem('X-ADMIN-NAME', value)
export const removeAdminName = () =>  localStorage.removeItem('X-ADMIN-NAME')
