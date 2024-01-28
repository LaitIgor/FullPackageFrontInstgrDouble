import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite"
import { Link } from "react-router-dom";
import PostsStats from "./PostsStats";

type GridPostListProps = {
    posts: Models.Document[],
    showUser?: boolean,
    showStats?: boolean,
}

const GridPostList = ({ posts, showUser = true, showStats = true }: GridPostListProps) => {
    const { user } = useUserContext();

  return (
    <ul className="grid-container">
        {posts.map((post) => (
            <li className="relative min-w-80 h-80" key={post.$id}>
                <Link className='grid-post_link' to={`/posts/${post.$id}`}>
                    <img className="h-full w-full object-contain" src={post.imageUrl} alt="post" />
                </Link>

                <div className="grid-post_user">
                    {showUser && (
                        <div className="flex items-center flex-1 justify-start gap-2">
                            <img className="h-8 -w-8 rounded-full" src={post.creator.imageUrl} alt="creator" />
                            <p className="line-clamp-1">{post.creator.name}</p>
                        </div>
                    )}
                    {showStats && <PostsStats post={post} userId={user.id}/>}
                </div>
            </li>
        ))}
    </ul>
  )
}

export default GridPostList