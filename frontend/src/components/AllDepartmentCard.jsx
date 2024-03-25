import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';
import { departmentIdAtom } from '../store';
import { useNavigate } from 'react-router-dom';

export const AllDepartmentCard = ({ department }) => {
    const navigate = useNavigate()
    const setDepartmentId = useSetRecoilState(departmentIdAtom)

    return (
        <div className="w-64 p-4">
            <div className="bg-gray-900 text-white p-6 flex flex-col justify-between h-full">
                <div>
                    <img src={department.department_image} className="w-16 h-16 mx-auto mb-8" style={{ fill: 'white' }} />
                    <p className="text-center font-bold mb-10">{department.department_name}</p>
                </div>
                <div className="flex justify-center">
                    <button
                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     onClick={() => {
                        setDepartmentId(department.department_id);
                        navigate('/home/deptSubjects')
                    }}
                     >
                        Visit
                    </button>
                </div>
            </div>
        </div>
    )
}

AllDepartmentCard.propTypes = {
    department: PropTypes.shape({
        department_id: PropTypes.number.isRequired,
        department_image: PropTypes.string,
        department_name: PropTypes.string.isRequired
    }).isRequired
};