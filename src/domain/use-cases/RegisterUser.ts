import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { Name } from "../value-objects/Name";
import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";

export class RegisterUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, name: string, email: string, password: string): Promise<User> {
    const user = User.create(id, Name.create(name), Email.create(email), Password.create(password));
    await this.userRepository.save(user);
    return user;
  }
}

