package org.example.medgraphbackend.controller;

import org.example.medgraphbackend.model.PostalCode;
import org.example.medgraphbackend.repository.PostalCodeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/postalcodes")
public class PostalCodeController {

    private final PostalCodeRepository postalCodeRepository;

    public PostalCodeController(PostalCodeRepository postalCodeRepository) {
        this.postalCodeRepository = postalCodeRepository;
    }

    // Get all postal codes
    @GetMapping
    public List<PostalCode> getAllPostalCodes() {
        return postalCodeRepository.findAll();
    }

    // Get postal codes by city name (using query parameter, e.g., /api/postalcodes?city=Gelsenkirchen)
    @GetMapping(params = "city")
    public List<PostalCode> getPostalCodesByCity(@RequestParam String city) {
        return postalCodeRepository.findByCityName(city);
    }

    // Get a specific postal code by its code
    @GetMapping("/{code}")
    public PostalCode getPostalCodeByCode(@PathVariable String code) {
        return postalCodeRepository.findById(code).orElse(null);
    }
}