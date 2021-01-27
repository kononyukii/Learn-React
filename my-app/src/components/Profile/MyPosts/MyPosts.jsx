import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {

  return (
    <div>
      <h4>My posts</h4>
      <form div className={s.addPost}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
      <div className={s.post}>
        {props.posts.map((post) => (
          <Post message={post.post} likeCounts={post.likeCount} />
        ))}
      </div>
    </div>
  );
}
