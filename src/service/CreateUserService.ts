import { getCustomRepository } from "typeorm"
import { UserRepository } from './../repository/UserRepository';
import { hash } from "bcryptjs"

interface IUserRequest {
    name: string
    email: string
    admin?: boolean
    password: string
}

export class CreateUserService {
    async execute({name, email, admin, password} : IUserRequest) {
        const userRepository = getCustomRepository(UserRepository)

        if(!email) {
            throw new Error("Incorrect email")
        }

        // verifica se o usuário já existe pelo email
        const userAlrealdyExists = await userRepository.findOne({email}) 

        if(userAlrealdyExists) {
            throw new Error("User alrealdy exists")   
        }

        const passwordHash = await hash(password, 8)

        const user = userRepository.create({
            name,
            email,
            admin,
            password: passwordHash //atribui valor de uma variável
        })

        await userRepository.save(user)

        return user
    }
}