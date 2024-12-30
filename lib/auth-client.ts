import { createAuthClient } from "better-auth/react"


export const {signIn, signOut, signUp, useSession,updateUser,changePassword} = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL, 
})