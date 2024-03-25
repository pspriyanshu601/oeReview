import { useRecoilValue } from "recoil"
import { departmentIdAtom, sortAtom } from "../store"
import { useEffect, useState } from "react"
import useUsername from "../hooks/useUsername"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import axios from "axios"
import Loading from "./Loading"

export const DeptSubjects = () => {
    const navigate = useNavigate();
    const departmentId = useRecoilValue(departmentIdAtom)

    const [loadingClick, setLoadingClick] = useState(false);
    const [username, loading] = useUsername();
    const [subjects, setSubjects] = useState([]);

    const sortValue = useRecoilValue(sortAtom);

    useEffect(() => {
        if ((username == null) && (loading == false)) navigate('/', { replace: true })
        if (departmentId == null) navigate('/home/allDepartments')

    }, [username, loading, navigate, departmentId])

    useEffect(() => {
        const token = localStorage.getItem("token");

        const getSubjects = async () => {
            setLoadingClick(true)

            try {
                const link = import.meta.env.VITE_REVIEWLINK + '/user/allSubjects/departmentId/' + departmentId + '/filter/' + sortValue;

                const response = await axios.get(link, {
                    headers: {
                        Authorization: token
                    }
                })

                if(response && response.data) {
                    setSubjects(response.data.subjects)
                }

                setLoadingClick(false)
            } catch (error) {
                console.log(error);
                setLoadingClick(false);
                if (error.response.data.message)
                    toast.error(error.response.data.message);
                else toast.error("Something went wrong");
            }
        }

        getSubjects()
    }, [departmentId, sortValue])

    if(loading || loadingClick) return <Loading />

    console.log(subjects);

    return (
        <div className="mt-[68px]">DeptSubjects</div>
    )
}
