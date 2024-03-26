import PropTypes from 'prop-types';

export const DeptSubjectsCard = ({ subject }) => {
    return (
        <div className="w-64 p-4">
            <div className="bg-gray-900 text-white p-6 flex flex-col justify-between h-40 shadow-whiteBottom rounded-lg">
                <div>
                    <p className="font-medium mb-3 text-3xl">{subject.course_code}</p>
                    <p className="">{subject.subject_name}</p>
                </div>
            </div>
        </div>
    )
}

DeptSubjectsCard.propTypes = {
    subject: PropTypes.shape({
        course_code: PropTypes.string.isRequired,
        subject_name: PropTypes.string.isRequired
    })
}