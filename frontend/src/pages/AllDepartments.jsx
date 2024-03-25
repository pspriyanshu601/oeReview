import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import useUsername from "../hooks/useUsername";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { AllDepartmentCard } from "../components/AllDepartmentCard";

export const AllDepartments = () => {
    const navigate = useNavigate();

    const [allDepts, setAllDepts] = useState([]);
    const [loadingClick, setLoadingClick] = useState(false);
    const [username, loading] = useUsername();

    useEffect(() => {
        if ((username == null) && (loading == false)) navigate('/', { replace: true })
    }, [username, loading, navigate])

    useEffect(() => {
        const token = localStorage.getItem("token");
        const depts = async () => {
            setLoadingClick(true);

            try {
                const link = import.meta.env.VITE_REVIEWLINK + '/user/allDepartments'

                const response = await axios.get(link, {
                    headers: {
                        Authorization: token
                    }
                })

                if (response && response.data) {
                    setAllDepts(response.data.departments)
                }

                // console.log(response)

                setLoadingClick(false)
            } catch (error) {
                console.log(error);
                setLoadingClick(false);
                if (error.response.data.message)
                    toast.error(error.response.data.message);
                else toast.error("Something went wrong");
            }
        }

        depts();
    }, [])

    if (loading || loadingClick) return <Loading />;
    // console.log(allDepts)

    return (
        <div className="min-h-screen min-w-screen pt-[68px] bg-gray-50 dark:bg-gray-800 p-6 flex flex-wrap">
            <div className="flex flex-wrap justify-center">
                {allDepts.map((dept) => {
                    return (
                        <AllDepartmentCard key={dept.department_id} department={dept} />
                    );
                })}
            </div>
        </div>
    )
}
