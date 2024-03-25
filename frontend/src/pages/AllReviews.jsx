import { useRecoilValue } from "recoil"
import { courseCodeAtom } from "../store"
import axios from "axios";

export const AllReviews = () => {
  const courseCode = useRecoilValue(courseCodeAtom);

  const getReviews = async () => {
    const token = localStorage.getItem('token')
    const link = import.meta.env.VITE_REVIEWLINK + '/user/allVerifiedReviews/courseCode/' + courseCode;
    const response = await axios.get(link, {
      headers: {
        Authorization: token
      }
    })

    console.log(response)
  }

  getReviews()

  return (
    <div className="mt-[68px]">AllReviews</div>
  )
}
