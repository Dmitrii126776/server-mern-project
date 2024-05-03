export default class UserDto {
    email;
    id;
    firstname;
    avatar;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.firstname = model.firstname;
        this.avatar = model.avatar;
    }
}

// export default new UserDto();
