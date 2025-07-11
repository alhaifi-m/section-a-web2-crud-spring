// http://localhost:3000/api/posts

import client  from "../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const body = await req.json()
        const { title, description } = body;

        const newPost = await client.post.create({
            data: {
                title,
                description
            }
        })
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}


export const GET = async () => {
    try {
        const posts = await client.post.findMany()
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}