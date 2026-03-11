package org.example.medgraphbackend.dto;

import java.util.List;

public class DiseaseSuggestionDto {
    private String diseaseName;
    private List<String> matchedSymptoms;
    private int matchCount;

    // Constructors
    public DiseaseSuggestionDto() {}

    public DiseaseSuggestionDto(String diseaseName, List<String> matchedSymptoms, int matchCount) {
        this.diseaseName = diseaseName;
        this.matchedSymptoms = matchedSymptoms;
        this.matchCount = matchCount;
    }

    // Getters and setters
    public String getDiseaseName() { return diseaseName; }
    public void setDiseaseName(String diseaseName) { this.diseaseName = diseaseName; }

    public List<String> getMatchedSymptoms() { return matchedSymptoms; }
    public void setMatchedSymptoms(List<String> matchedSymptoms) { this.matchedSymptoms = matchedSymptoms; }

    public int getMatchCount() { return matchCount; }
    public void setMatchCount(int matchCount) { this.matchCount = matchCount; }
}