import { Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    //Receber token
    const authToken = request.headers.authorization

    //Validar se o token está preenchido
    if(!authToken) {
        return response.status(401).end()
    }
    
    //Validar se o token é legítimo
    const [, token] = authToken.split(" ") // [, token] ignora o primeiro indice no array e coloca o valor no segundo, então o token recebe o valor final

    verify(token, "2e33ec485b55179d993797d1ac952c9a") // o segundo parâmetro é a senha secreta do AuthencateUserService
    
    //Receber informações do user
    
    
    return next()
}