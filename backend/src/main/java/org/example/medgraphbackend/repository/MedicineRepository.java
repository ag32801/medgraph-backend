package org.example.medgraphbackend.repository;

import org.example.medgraphbackend.model.Medicine;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MedicineRepository extends Neo4jRepository<Medicine, String> {

    // Handle both TREATS and TREATED_BY relationships
    @Query("MATCH (d:Disease {name: $diseaseName})-[:TREATS|TREATED_BY]->(m:Medicine) RETURN m")
    List<Medicine> findMedicinesByDisease(String diseaseName);
}