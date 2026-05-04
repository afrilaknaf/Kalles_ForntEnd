import { useQuery } from "@tanstack/react-query"


export default function useGets(path){
    const url = import.meta.env.VITE_URL

    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`${url}${path}`)
            return await res.json()
        },
    })
    
}