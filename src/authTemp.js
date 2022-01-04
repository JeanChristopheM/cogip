export default dbUserCheck = (username, pwd) => {
    const users = ["jc", "bap"];
    const pwds = ["jc", "bap"];
    const emails = ["jc@jc.com", "bap@bap.com"];
    const admins = [true, false];

    const index = users.indexOf(username);

    if (!users.includes(username)) {
        return "user not found";
    }
    if (pwds[index] !== pwd) {
        return "Password did not match";
    }
    return {
        username,
        email: emails[index],
        admin: admins[index],
    };
};
