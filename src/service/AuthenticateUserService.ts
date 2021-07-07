import { getCustomRepository } from 'typeorm';
import { UserRepository } from './../repository/UserRepository';

import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAunthenticateRequest {
    email: string
    password: string
}

export class AuthenticateUserService {
    async execute({email, password}: IAunthenticateRequest) {
        const userRepository = getCustomRepository(UserRepository)

        // Verificar se o email existe no banco
        const user = await userRepository.findOne({
            email
        })

        if(!user) {
            throw new Error("Email/Password incorret")
        }

        //Verificar se a senha está correta
        const passwordMatches = await compare(password, user.password)

        //Esse ! serve para comparar booleanos, ou seja se a variável passwordMatches for false ele executa o bloco
        if(!passwordMatches) {
            throw new Error("Email/Password incorret")
        }

        //Gerar o token
        const token = sign({
            email: user.email
        }, "2e33ec485b55179d993797d1ac952c9a", {
            subject: user.id,
            expiresIn: "1d"
        })
        return token
    }
}