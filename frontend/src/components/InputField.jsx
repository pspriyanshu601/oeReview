import PropTypes from 'prop-types'

export const InputField = ({ label, value, onchange, placeholder, type }) => {
    return (
        <div>
            <label htmlFor={type} className="block mb-2 text-sm font-medium text-white">{label}</label>
            <input
                value={value}
                onChange={onchange}
                type={type}
                name={type}
                id={type}
                placeholder={placeholder}
                className="border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
            />
        </div>
    )
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};