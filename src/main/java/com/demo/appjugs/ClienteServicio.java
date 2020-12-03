package com.demo.appjugs;

import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class ClienteServicio {
    private IClienteRepositorio repo;

    public ClienteServicio(IClienteRepositorio repo) {
        this.repo = repo;
    }

    public List<Cliente> getClientes() {
        return repo.findAll();
    }

    public Cliente saveCliente(Cliente cliente) {
        return repo.save(cliente);
    }

    public void deleteCliente(String idCliente) {
        repo.deleteById(idCliente);
    }
}
