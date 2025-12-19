import { useQuery } from "@tanstack/react-query"

export const employerProfile = ()=>{
    const baseUrl = import.meta.env.VITE_API_BASE_URL
    const token = localStorage.getItem('jwt')
    
    const {data, isLoading, error} = useQuery({
        queryKey: ['employer_profile'],
        queryFn: ()=>{
            fetch(`${baseUrl}/api/employer/profile`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
    })

    return {data, isLoading, error}
}