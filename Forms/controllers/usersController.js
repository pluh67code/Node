import usersStorage from "../storages/usersStorage.js";
import {body, validationResult, matchedData} from "express-validator";

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const emailErr = "must be formatted properly.";
const ageErr = "must be a whole number between 18 and 120 inclusive.";
const bioErr = "must be 200 characters or under.";

function usersListGet(req, res) {
    res.render("index", {
        title: "User List",
        users: usersStorage.getUsers(),
    });
}

function usersCreateGet(req, res, next) {
    res.render("createUser", {
        title: "Create User",
    });
}

function usersUpdateGet(req, res) {
    const user = usersStorage.getUser(req.params.id);
    res.render("updateUser", {
        title: "Update user",
        user: user,
    })
}

function usersDeletePost(req, res) {
    usersStorage.deleteUser(req.params.id);
    res.redirect("/");
}

const validateUser = [
    body("firstName").trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({min: 1, max: 10}).withMessage(`First name ${lengthErr}`),

    body("lastName").trim()
    .isAlpha().withMessage(`Last name ${alphaErr}`)
    .isLength({min: 1, max: 10}).withMessage(`Last name ${lengthErr}`),

    body("email").trim()
    .isEmail().withMessage(`Email ${emailErr}`).normalizeEmail(),

    body("age").optional({values: "falsy"}).trim()
    .isInt({min: 18, max: 120}).withMessage(`Age ${ageErr}`),

    body("bio").optional({values: "falsy"}).trim()
    .isLength({min: 1, max: 200}).withMessage(`Bio ${bioErr}`)
];

const usersCreatePost = [
    validateUser,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("createUser", {
                title: "Create user",
                errors: errors.array(),
            })
        }
        const {firstName, lastName, email, age, bio} = matchedData(req);
        usersStorage.addUser({firstName, lastName, email, age, bio});
        res.redirect("/");
    }
]


const usersUpdatePost = [
    validateUser,
    (req, res) => {
        const user = usersStorage.getUser(req.params.id);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("updateUser", {
                title: "Update user",
                user: user,
                errors: errors.array(),
            })
        }
        const {firstName, lastName, email, age, bio} = matchedData(req);
        usersStorage.updateUser(req.params.id, {firstName, lastName, email, age, bio});
        res.redirect("/");
    }
]


export {
    usersListGet,

    usersCreateGet,
    usersCreatePost,

    usersUpdateGet,
    usersUpdatePost,

    usersDeletePost,
}