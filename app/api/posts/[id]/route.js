// url: https://localhost:3000/api/posts/{some-id}

import client from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const post = await client.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return NextResponse.json({ status: 404 }, { message: "Post Not Found" });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { status: 500 },
      { message: "Error getting post", error: error.message }
    );
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { id } = params;
    const { title, description } = body;

    const updatePost = await client.post.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    if (!updatePost) {
      return NextResponse.json({ message: "Post Not Found" }, { status: 404 });
    }
    return NextResponse.json(updatePost, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await client.post.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
