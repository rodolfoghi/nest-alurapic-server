import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioService {
    private usuarios = [];

    public cria(usuario) {
        this.usuarios.push(usuario);

        return usuario;
    }
}