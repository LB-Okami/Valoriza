import { getCustomRepository } from 'typeorm';
import { TagRepository } from '../repository/TagRepository';
export class CreateTagService {

    async execute(name: string) {
        const tagRepository = getCustomRepository(TagRepository)

        //Verifica se o nome está preenchdio
        if(!name) {
            throw new Error("Incorret name!")
        }

        //Verifica se o nome já existe no db
        const tagAlreadyExists = await tagRepository.findOne({
            name
        })

        if(tagAlreadyExists) {
            throw new Error("Tag already Exists!")
        }

        //Salva o dado no db
        const tag = tagRepository.create({
            name
        })

        await tagRepository.save(tag)

        return tag
    }
}