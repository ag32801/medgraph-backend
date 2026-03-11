package org.example.medgraphbackend.repository;

import org.example.medgraphbackend.dto.DiseaseSuggestionDto;
import org.example.medgraphbackend.model.Disease;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DiseaseRepository extends Neo4jRepository<Disease, String> {

    @Query("WITH $symptomList AS symptomList " +
            "MATCH (s:Symptom)-[:SYMPTOM_OF]->(d:Disease) " +
            "WHERE s.name IN symptomList " +
            "WITH d, collect(s.name) AS matchedSymptoms, count(s) AS matchedCount, size(symptomList) AS totalSymptoms " +
            "RETURN d.name AS diseaseName, matchedSymptoms AS matchedSymptoms, matchedCount AS matchCount " +
            "ORDER BY matchedCount DESC " +
            "LIMIT 3")
    List<DiseaseSuggestionDto> findTopDiseasesBySymptoms(List<String> symptomList);
}