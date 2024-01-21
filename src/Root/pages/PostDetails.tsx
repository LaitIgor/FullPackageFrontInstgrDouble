import { Link, useParams } from "react-router-dom";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
import Loader from "@/components/shared/Loader";
import { formatDate } from "@/lib/utils";
import { useUserContext } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import PostsStats from "@/components/shared/PostsStats";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || '');

  const { user } = useUserContext();

  const handleDelete = () => {

  }

  return (
    <div className="post_details-container">
      {isPending ? <Loader /> : (
        <div className="post_details-card">
          <img className="post_details-img" src={post?.imageUrl} alt="post" />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link className="flex items-center gap-3" to={`/profile/${post?.creator.$id}`}>
                <img 
                  className="rounded-full w-8 lg:w-12 h-8 lg:h-12"
                  src={post?.creator?.imageUrl || '/assets/iocons/profile-placeholder.svg'} alt="profile avatar" 
                />
              
                <div className="flex flex-col">
                  <p className="base-medium lg:body-bold text-light-1">{post?.creator.name}</p>
                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular">{formatDate(post?.$createdAt || '')}</p>
                    -
                    <p className='subtle-semibold lg:small-regular'>{post?.location}</p>
                  </div>
                </div>
              </Link>

              <div className="flex-center">
                <Link className={`${user.id !== post?.creator.$id && 'hidden'}`} to={`/update-post/${post?.$id}`}>
                  <img 
                    src='/assets/icons/edit.svg' 
                    alt="edit"  
                    width={24} 
                    height={24}
                  />
                </Link>

                <Button
                  className={`${user.id !== post?.creator.$id && 'hidden'} ghost_details-delete_btn` }
                  onClick={handleDelete}
                  variant='ghost'
                >
                  <img 
                    src='/assets/icons/delete.svg' 
                    alt="delete"   
                    width={24} 
                    height={24} 
                  />
                </Button>
              </div>
            </div>
            <hr className="border w-full border-dark-4/80" />
            <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
              <p className=''>{post?.caption}</p>
              <ul className="flex gap-1 mt-2">
                {post?.tags.map((tag: string) => {
                  return <li className="text-light-3" key={tag}>#{tag}</li>
                })}
              </ul>
            </div>
            <div className="w-full">
              <PostsStats post={post} userId={user.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostDetails