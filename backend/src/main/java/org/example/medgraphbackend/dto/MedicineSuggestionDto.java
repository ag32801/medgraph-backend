package org.example.medgraphbackend.dto;

public class MedicineSuggestionDto {
    private String name;

    public MedicineSuggestionDto() {}

    public MedicineSuggestionDto(String name) {
        this.name = name;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}