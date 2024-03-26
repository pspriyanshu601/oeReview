import PropTypes from 'prop-types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { courseCodeAtom, sortAtom } from '../store';
import Rating from '@mui/material/Rating'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeCard = ({ review }) => {
    const navigate = useNavigate();
    const setCourseCode = useSetRecoilState(courseCodeAtom)

    const [rating, setRating] = useState(0);
    const sortValue = useRecoilValue(sortAtom);

    useEffect(() => {
        if (sortValue === 'overall') {
            setRating(parseInt(review.average_rating));
        } else {
            setRating(parseInt(review["average_" + sortValue + "_rating"]));
        }
    }, [sortValue, review]);

    return (
        <div className="w-64 p-4">
            <div
                className="bg-gray-900 text-white p-6 flex flex-col justify-between h-60 shadow-whiteBottom rounded-lg transform transition-transform hover:scale-105 cursor-pointer"
                onClick={() => {
                    setCourseCode(review.course_code)
                    navigate('/home/allReviews')
                }}
            >
                <div>
                    <p className="font-medium mb-1 text-lg">{review.course_code}</p>
                    <p className="text-xl h-20 mb-3">{review.subject_name}</p>
                    <p className="text-sm h-10 mb-3"><i>{review.department_name}</i></p>
                    <Rating name="half-rating" value={rating} precision={0.1} readOnly />
                </div>
            </div>
        </div>
    )
}

HomeCard.propTypes = {
    review: PropTypes.shape({
        course_code: PropTypes.string.isRequired,
        subject_name: PropTypes.string.isRequired,
        department_name: PropTypes.string.isRequired,
        average_rating: PropTypes.string.isRequired
    })
}