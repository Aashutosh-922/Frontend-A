import React, { useState } from 'react';
import Post from './Post';
import '../index.css';

const BlogPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
      content: 'My First Post',
      categories: ['post1', 'post2'],
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      comments: [
        { id: 1, content: 'Comment 1' },
        { id: 2, content: 'Comment 2' },
      ],
    },
    // Add more posts here...
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    categories: [],
    tags: [],
    comments: [],
  });
  const [editMode, setEditMode] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const addPost = () => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
    setNewPost({
      title: '',
      content: '',
      categories: [],
      tags: [],
      comments: [],
    });
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const editPost = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    setNewPost({ ...postToEdit });
    setEditMode(true);
    setEditPostId(postId);
  };

  const updatePost = () => {
    setPosts(
      posts.map((post) =>
        post.id === editPostId ? { ...newPost, id: post.id } : post
      )
    );
    setNewPost({
      title: '',
      content: '',
      categories: [],
      tags: [],
      comments: [],
    });
    setEditMode(false);
    setEditPostId(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`container mx-auto px-4 py-8 ${darkMode ? 'dark' : ''}`}>
      <h1 className="text-4xl font-bold mb-4">Blog App</h1>

      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onDelete={() => deletePost(post.id)}
          onEdit={() => editPost(post.id)}
        />
      ))}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          {editMode ? 'Edit Post' : 'Create Post'}
        </h2>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded px-4 py-2 w-full"
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            className="border rounded px-4 py-2 w-full"
            id="content"
            name="content"
            rows="4"
            value={newPost.content}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="categories">
            Categories
          </label>
          <input
            className="border rounded px-4 py-2 w-full"
            type="text"
            id="categories"
            name="categories"
            value={newPost.categories.join(', ')}
            onChange={(e) =>
              setNewPost({
                ...newPost,
                categories: e.target.value.split(',').map((c) => c.trim()),
              })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="tags">
            Tags
          </label>
          <input
            className="border rounded px-4 py-2 w-full"
            type="text"
            id="tags"
            name="tags"
            value={newPost.tags.join(', ')}
            onChange={(e) =>
              setNewPost({
                ...newPost,
                tags: e.target.value.split(',').map((t) => t.trim()),
              })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          {editMode ? (
            <button
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
                darkMode ? 'bg-opacity-75' : ''
              }`}
              onClick={updatePost}
            >
              Update
            </button>
          ) : (
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ${
                darkMode ? 'bg-opacity-75' : ''
              }`}
              onClick={addPost}
            >
              Create
            </button>
          )}
          <button
            className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ${
              darkMode ? 'bg-opacity-75' : ''
            }`}
            onClick={() => {
              setNewPost({
                title: '',
                content: '',
                categories: [],
                tags: [],
                comments: [],
              });
              setEditMode(false);
              setEditPostId(null);
            }}
          >
            Clear
          </button>
          <div className="flex items-center flex-col">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="hidden"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label
              htmlFor="darkModeToggle"
              className={`cursor-pointer mt-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;



// import React, { useState } from 'react';
// import Post from './Post';
// import '../index.css';


// const BlogPage = () => {
//   const [posts, setPosts] = useState([
//     { id: 1, title: 'First Post', content: 'Lorem ipsum dolor sit amet...' },
//     { id: 2, title: 'Second Post', content: 'Lorem ipsum dolor sit amet...' },
//     { id: 3, title: 'Third Post', content: 'Lorem ipsum dolor sit amet...' },
//   ]);

//   const [newPost, setNewPost] = useState({ title: '', content: '' });
//   const [editMode, setEditMode] = useState(false);
//   const [editPostId, setEditPostId] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleInputChange = (e) => {
//     setNewPost({ ...newPost, [e.target.name]: e.target.value });
//   };

//   const addPost = () => {
//     setPosts([...posts, { ...newPost, id: Date.now() }]);
//     setNewPost({ title: '', content: '' });
//   };

//   const deletePost = (postId) => {
//     setPosts(posts.filter((post) => post.id !== postId));
//   };

//   const editPost = (postId) => {
//     const postToEdit = posts.find((post) => post.id === postId);
//     setNewPost({ title: postToEdit.title, content: postToEdit.content });
//     setEditMode(true);
//     setEditPostId(postId);
//   };

//   const updatePost = () => {
//     setPosts(
//       posts.map((post) =>
//         post.id === editPostId ? { ...post, ...newPost } : post
//       )
//     );
//     setNewPost({ title: '', content: '' });
//     setEditMode(false);
//     setEditPostId(null);
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`container ${darkMode ? 'dark' : ''}`}>
//       <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'dark' : ''}`}>
//         Blog App
//       </h1>

//       {posts.map((post) => (
//         <Post
//           key={post.id}
//           post={post}
//           onDelete={() => deletePost(post.id)}
//           onEdit={() => editPost(post.id)}
//           darkMode={darkMode}
//         />
//       ))}

//       <div className="mt-8">
//         <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'dark' : ''}`}>
//           {editMode ? 'Edit Post' : 'Create Post'}
//         </h2>
//         <div className="mb-4">
//           <label
//             className={`block font-bold mb-2 ${darkMode ? 'dark' : ''}`}
//             htmlFor="title"
//           >
//             Title
//           </label>
//           <input
//             className={`border rounded px-4 py-2 w-full ${
//               darkMode ? 'dark' : ''
//             }`}
//             type="text"
//             id="title"
//             name="title"
//             value={newPost.title}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className={`block font-bold mb-2 ${darkMode ? 'dark' : ''}`}
//             htmlFor="content"
//           >
//             Content
//           </label>
//           <textarea
//             className={`border rounded px-4 py-2 w-full ${
//               darkMode ? 'dark' : ''
//             }`}
//             id="content"
//             name="content"
//             rows="4"
//             value={newPost.content}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <div className="flex justify-between">
//           {editMode ? (
//             <button
//               className={`primary ${darkMode ? 'dark' : ''}`}
//               onClick={updatePost}
//             >
//               Update
//             </button>
//           ) : (
//             <button
//               className={`primary ${darkMode ? 'dark' : ''}`}
//               onClick={addPost}
//             >
//               Create
//             </button>
//           )}
//           <button
//             className={`danger ${darkMode ? 'dark' : ''}`}
//             onClick={() => {
//               setNewPost({ title: '', content: '' });
//               setEditMode(false);
//               setEditPostId(null);
//             }}
//           >
//             Clear
//           </button>
//           <button
//             className={`primary ${darkMode ? 'dark' : ''}`}
//             onClick={toggleDarkMode}
//           >
//             {darkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
