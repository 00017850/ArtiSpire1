const {check}= require('express-validator');

const artValidator = [
    check('title')
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ min: 5 })
        .withMessage('Title must be at least 5 characters long'),
    check('description')
        .notEmpty()
        .withMessage('Description is required')
        .isLength({ min: 3 })
        .withMessage('Description must be at least 3 characters long'),
    check('image')
        .notEmpty()
        .withMessage('Image is required')
        .isURL()
        .withMessage(`Image must be a valid URL`)
]

module.exports =artValidator;
