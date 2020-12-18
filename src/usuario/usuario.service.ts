import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
    private usuarios: Array<Usuario> = [
        {
            id: 1,
            nomeDeUsuario: 'fulano',
            email: 'fulanodetal@gmail.com',
            senha: '123456',
            nomeCompleto: 'Fulano de Tal',
            dataDeEntrada: new Date()
        }
    ];

    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        const usuarioEncontrado = this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario);
        return usuarioEncontrado;
    }

    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);

        return usuario;
    }
}