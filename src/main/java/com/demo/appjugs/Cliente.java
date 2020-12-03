package com.demo.appjugs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Clientes")
public class Cliente {

    @Id
    private String idNumero;

    private String nombre;

    private String apellido;
}
