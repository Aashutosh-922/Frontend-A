import React from 'react';

const Post = ({ post, onDelete, onEdit }) => {
  const { id, title, content, categories, tags, comments } = post;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>

      <div className="flex flex-wrap mb-2">
        {categories.map((category) => (
          <span
            key={category}
            className="bg-blue-200 text-blue-800 rounded-full px-2 py-1 mr-2 mb-2"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-bold">Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>

      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;


// import React from 'react';

// const Post = ({ post, onDelete, onEdit }) => {
//   return (
//     <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
//       <div className="flex justify-between">
//         <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
//         <div>
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
//             onClick={onEdit}
//           >
//             Edit
//           </button>
//           <button
//             className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//             onClick={onDelete}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//       <p>{post.content}</p>
//     </div>
//   );
// };

// export default Post;



// import React from 'react';

// const Post = ({ post }) => {
//   return (
//     <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
//       <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
//       <p>{post.content}</p>
//     </div>
//   );
// };

// export default Post;
