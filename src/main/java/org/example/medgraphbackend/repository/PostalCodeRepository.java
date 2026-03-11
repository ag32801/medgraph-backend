package org.example.medgraphbackend.repository;

import org.example.medgraphbackend.model.PostalCode;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PostalCodeRepository extends Neo4jRepository<PostalCode, String> {

    // Custom query to find postal codes by city name
    @Query("MATCH (c:City {name: $cityName})-[:HAS_POSTALCODE]->(p:PostalCode) RETURN p")
    List<PostalCode> findByCityName(String cityName);
}