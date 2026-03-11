package org.example.medgraphbackend.controller;

import org.example.medgraphbackend.model.City;
import org.example.medgraphbackend.repository.CityRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
public class CityController {

    private final CityRepository cityRepository;

    public CityController(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @GetMapping
    public List<City> getAllCities() {
        return cityRepository.findAll();
    }
}