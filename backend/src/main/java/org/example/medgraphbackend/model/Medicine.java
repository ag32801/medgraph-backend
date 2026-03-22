package org.example.medgraphbackend.model;

import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

@Node("Medicine")
public class Medicine {

    @Id
    private String name;  // e.g., "clotrimazole 1% cream"

    @Property("degreeCentrality")
    private Double degreeCentrality;

    @Property("wcc_id")
    private Long wccId;

    // Default constructor
    public Medicine() {}

    // Constructor with name
    public Medicine(String name) {
        this.name = name;
    }

    // Constructor with all fields
    public Medicine(String name, Double degreeCentrality, Long wccId) {
        this.name = name;
        this.degreeCentrality = degreeCentrality;
        this.wccId = wccId;
    }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Double getDegreeCentrality() { return degreeCentrality; }
    public void setDegreeCentrality(Double degreeCentrality) { this.degreeCentrality = degreeCentrality; }

    public Long getWccId() { return wccId; }
    public void setWccId(Long wccId) { this.wccId = wccId; }
}