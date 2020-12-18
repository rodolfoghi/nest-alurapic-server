import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Usuario {
    id: number;

    @IsNotEmpty({
        message: 'nomeDeUsuario é obrigatório'
    })
    @IsString({
        message: 'nomeDeUsuario deve ser string'
    })
    nomeDeUsuario: string;

    @IsEmail()
    email: string;

    @IsNotEmpty({
        message: 'senha é obrigatória'
    })
    senha: string;

    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório'
    })
    nomeCompleto: string;

    dataDeEntrada: Date;
}