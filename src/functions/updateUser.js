import users from "../data/userdata.js";

export default function updateUser(id, body) {

    const user = users.find((user) => user.id == id);
    if (!user) {
        throw new Error("User not found");
    }
    user.name = body.name;
    user.email = body.email;

    return user;
}