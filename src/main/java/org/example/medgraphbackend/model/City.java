package org.example.medgraphbackend.model;

import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

@Node("City")
public class City {

    @Id
    private String name;

    @Property("country")
    private String country;

    @Property("state")
    private String state;

    @Property("degreeCentrality")
    private Double degreeCentrality;

    // Default constructor (required by Neo4j)
    public City() {}

    // Constructor with fields
    public City(String name, String country, String state, Double degreeCentrality) {
        this.name = name;
        this.country = country;
        this.state = state;
        this.degreeCentrality = degreeCentrality;
    }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public Double getDegreeCentrality() { return degreeCentrality; }
    public void setDegreeCentrality(Double degreeCentrality) { this.degreeCentrality = degreeCentrality; }
}