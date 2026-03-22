package org.example.medgraphbackend.controller;

import org.example.medgraphbackend.dto.MedicineSuggestionDto;
import org.example.medgraphbackend.model.Medicine;
import org.example.medgraphbackend.repository.MedicineRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/medicines")
public class MedicineController {

    private final MedicineRepository medicineRepository;

    public MedicineController(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }

    @GetMapping("/disease/{diseaseName}")
    public List<MedicineSuggestionDto> getMedicinesByDisease(@PathVariable String diseaseName) {
        List<Medicine> medicines = medicineRepository.findMedicinesByDisease(diseaseName);
        return medicines.stream()
                .map(medicine -> new MedicineSuggestionDto(medicine.getName()))
                .collect(Collectors.toList());
    }
}