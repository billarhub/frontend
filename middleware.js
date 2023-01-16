import { NextResponse } from 'next/server'

export default function middleware (request){
    let verify = request.cookies.has('auth')


    if (!verify && request.nextUrl.pathname.startsWith('/tournament')){
        return NextResponse.rewrite(new URL('/', request.url))
    }
    if (verify && request.nextUrl.pathname.startsWith('/login')){
        return NextResponse.rewrite(new URL('/', request.url))
    }
} 