import users from "./data/userdata.js";

export default function createUser(body) {
    const newUser = {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        name: body.name,
        email: body.email,
    };
    users.push(newUser);
    return newUser;
}