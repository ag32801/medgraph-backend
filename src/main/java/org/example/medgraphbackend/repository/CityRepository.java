package org.example.medgraphbackend.repository;

import org.example.medgraphbackend.model.City;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends Neo4jRepository<City, String> {
    // You can add custom query methods later if needed
}