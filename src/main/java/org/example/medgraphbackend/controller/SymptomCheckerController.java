package org.example.medgraphbackend.controller;

import org.example.medgraphbackend.dto.DiseaseSuggestionDto;
import org.example.medgraphbackend.repository.DiseaseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/check-symptoms")
public class SymptomCheckerController {

    private final DiseaseRepository diseaseRepository;

    public SymptomCheckerController(DiseaseRepository diseaseRepository) {
        this.diseaseRepository = diseaseRepository;
    }

    // POST endpoint expecting a list of symptom names in the request body
    @PostMapping
    public List<DiseaseSuggestionDto> checkSymptoms(@RequestBody List<String> symptoms) {
        return diseaseRepository.findTopDiseasesBySymptoms(symptoms);
    }

    // Alternative: GET with query parameter (e.g., /api/check-symptoms?symptoms=Fever,Headache)
    @GetMapping
    public List<DiseaseSuggestionDto> checkSymptomsGet(@RequestParam List<String> symptoms) {
        return diseaseRepository.findTopDiseasesBySymptoms(symptoms);
    }
}