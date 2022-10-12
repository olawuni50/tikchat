import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId: 'd8j5g7ar',
    dataset:'production',
    apiVersion:'2022-09-06',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})