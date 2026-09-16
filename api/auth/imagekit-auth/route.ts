// File: app/api/upload-auth/route.ts
import { getUploadAuthParams } from "@imagekit/next/server"

export async function GET() {

    try {
        const authenticationParameters = getUploadAuthParams({
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string, // Never expose this on client side
            publicKey: process.env.IMAGE_PUBLIC_PUBLIC_KEY as string,
        })
    
        return Response.json({
            authenticationParameters,
            publicKey: process.env.IMAGE_PUBLIC_PUBLIC_KEY 
            })
    } catch (error) {
        return Response.json(
            {
            error: "Authentication for Imagekit failed"
        },
        { status: 500 }
    )
    }
}


// { token, expire, signature } = authenticationParameters (in teeno ko mena direct ye name de diya ha)