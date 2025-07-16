"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Post = ({ post }) => {
  console.log("I am in Post", post);
// part 2
  const Router = useRouter();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [postToEdit, setPostToEdit] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
// part 2
  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/posts/${post.id}`, postToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowModalEdit(false);
        Router.refresh();
      });
  };
// part 2
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostToEdit((prevState) => ({ ...prevState, [name]: value }));
  };
// part 2
  const handleDeletePost = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowDeleteModal(false);
        Router.refresh();
      });
  };

  return (
    <li className="p-3 my-5 bg-slate-300" key={post.id}>
      {/* Part 1 */}
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {/* Part 2 */}
      <div className="pt-5">
        <button
          className="text-blue-700 mr-3"
          onClick={() => {
            setShowModalEdit(true);
            setPostToEdit(post);
          }}
        >
          Edit
        </button>

        <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
          <form className="w-full px-5 pb-6" onSubmit={handleEditSubmit}>
            <h1>Add or Update a Post</h1>
            <input
              type="text"
              placeholder="title"
              name="title"
              className="w-full p-2 mb-3 bg-amber-50"
              value={postToEdit.title}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="description"
              name="description"
              className="w-full p-2 mb-3"
              value={postToEdit.description}
              onChange={handleChange}
            />
            <button type="submit" className="bg-blue-700 text-white px-5 py-2 bg-amber-50">
              submit
            </button>
          </form>
        </Modal>
        <button
          className="text-red-700 mr-3"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </button>
        <Modal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
          <div className="flex flex-col items-start">
            <h1 className="text-2xl pb-3">
              Are you sure you want to delete this post?
            </h1>
            <div className="space-x-4">
              <button
                className="text-blue-700 font-bold"
                onClick={() => handleDeletePost(post.id)}
              >
                {" "}
                Yes
              </button>
              <button
                className="text-red-700 font-bold"
                onClick={() => setShowDeleteModal(false)}
              >
                {" "}
                No
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </li>
  );
};

export default Post;
