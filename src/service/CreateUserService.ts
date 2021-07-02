import { getCustomRepository } from "typeorm"
import { UserRepository } from './../repository/UserRepository';

interface IUserRequest {
    name: string
    email: string
    admin?: boolean
}

export class CreateUserService {
    async execute({name, email, admin} : IUserRequest) {
        const userRepository = getCustomRepository(UserRepository)

        if(!email) {
            throw new Error("Incorrect email")
        }

        // verifica se o usuário já existe pelo email
        const userAlrealdyExists = await userRepository.findOne({email}) 

        if(userAlrealdyExists) {
            throw new Error("User alrealdy exists")   
        }

        const user = userRepository.create({
            name,
            email,
            admin
        })

        await userRepository.save(user)

        return user
    }
}