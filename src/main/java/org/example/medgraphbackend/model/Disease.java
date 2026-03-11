package org.example.medgraphbackend.model;

import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

@Node("Disease")
public class Disease {

    @Id
    private String name;

    // Add other properties if needed (e.g., description)
    @Property("description")
    private String description;

    // Constructors
    public Disease() {}

    public Disease(String name, String description) {
        this.name = name;
        this.description = description;
    }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}