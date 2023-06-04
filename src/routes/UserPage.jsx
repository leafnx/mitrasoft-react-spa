import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserFetch, isUserLoading } from "../features/user/userSlice";
import User from "../features/user/User";
import Loader from "../components/Loader";

export default function UserPage() {
  const { userId } = useParams()
  const isLoading = useSelector(isUserLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserFetch(userId))
  }, [])

  return(
    <div>
      {isLoading ? <Loader /> : <User />}
    </div>
  )
}