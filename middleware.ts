import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import path from "path";


export default withAuth(
    function middleware() {
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized({ req, token }) {
                const {pathname} = req.nextUrl

                if(
                    pathname.startsWith("/api/auth") ||
                    pathname === "/login"  ||
                    pathname === "/register"
                )
                return true

                if(pathname === "/" || pathname.startsWith("/api/videos")){
                    return true
                }

                return !!token

            }
        }
    }
)


// ye config ab official documentation pe nhi ha 
export const config = {
    matcher: [
        // Match all request paths except:
        //   - _next/static (static files)
        //   - _next/image (image opyimization files)
        //   - canNewFetchStrategyProvideMoreContent.ico (favicon file)
        //   - public folder

        "/((?!_next/static|_next/image|favicon.ico|public/).*)",
    ]
}