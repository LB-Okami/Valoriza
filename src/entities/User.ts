import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("users") 
export class User {
    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    admin: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        // Verifica se o usuário é novo e cadastra um novo ID random
        if(!this.id) {
            this.id = uuid()
        }
    }
}