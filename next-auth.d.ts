import NextAuth, { DefaultSession } from "next-auth";

//is file me already declared mode ha unko redefine or modified kr sakta ha

declare module 'next-auth' {
    interface Session{
        user: {
            id: string;
        } & DefaultSession['user']
    }
}
