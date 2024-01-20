import { useState, useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";
import { useDeleteSavePost, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite"
import { checkIsLiked } from "@/lib/utils";

type PostStatsProps = {
    post: Models.Document,
    userId: string
}


const PostsStats = ({ post, userId }: PostStatsProps) => {
    const likesList = post.likes.map((user: Models.Document) => user.$id);

    const [likes, setLikes] = useState(likesList);
    const [isSaved, setIsSaved] = useState(false);


    const { mutate: likePost } = useLikePost();
    const { mutate: savePost } = useSavePost();
    const { mutate: deleteSavedPost } = useDeleteSavePost();

    const { data: currentUser } = useUserContext();

    const handleLikePost= () => {
        
    }

    const handleSavePost= () => {

    }


  return (
    <div className="flex justify-between items-center z-20">
        <div className="flex gap-2 mr-5">
            <img 
                className="cursor-pointer"
                onClick={handleLikePost}
                src={checkIsLiked(likes, userId) ? "/assets/icons/liked.svg" : "/assets/icons/like.svg"} 
                alt="like action" 
                width={20} 
                height={20} 
        />
            <p className="small-medium lg:base-medium">{likes.length}</p>
        </div>
        <div className="flex gap-2">
            <img 
                className="cursor-pointer"
                onClick={handleSavePost}
                src={isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg" } 
                alt="save action" 
                width={20} 
                height={20} 
            />
        </div>
    </div>
  )
}

export default PostsStats