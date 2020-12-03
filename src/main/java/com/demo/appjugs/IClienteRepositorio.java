package com.demo.appjugs;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClienteRepositorio extends MongoRepository<Cliente, String> {
}
