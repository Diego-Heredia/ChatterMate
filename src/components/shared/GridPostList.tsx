import { useUserContext } from "@/context/AuthContext"
import { Models } from "appwrite"
import { Link } from "react-router-dom"
import PostStats from "./PostStats"

type GridPostListProps = {
    posts: Models.Document[],
    showUser?: boolean,
    showStats?: boolean,
}
const GridPostList = ({posts, showUser = true, showStats = true}: GridPostListProps) => {
    const {user} = useUserContext()
  return (
    <ul className="grid-container">
        {posts.map((post) => (
            <li key={post.$id} className="relative min-w-80 h-80">
                <Link to={`/post/${post.$id}`} className="grid-post_link">
                    <img src={post.imageUrl || '/assets/icons/profile-placeholder.svg'} alt="post" className="h-full w-full object-cover" />
                </Link>
                <div className="grid-post_user">
                    {showUser && (
                        <div  className="flex items-center gap-2 justify-start flex-1">
                            <img src={post?.creator?.imageUrl || '/assets/icons/profile-placeholder.svg'} alt="creator" className="rounded-full w-8 h-8 " />
                            <p className="line-clamp-1">{post.creator.name}</p>
                        </ div>
                    )}
                    {showStats && <PostStats post={post} userId={user.id}/> }
                </div>
            </li>
        ))}
    </ul>
  )
}

export default GridPostList