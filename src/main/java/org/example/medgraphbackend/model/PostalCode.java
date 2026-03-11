package org.example.medgraphbackend.model;

import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

@Node("PostalCode")
public class PostalCode {

    @Id
    private String code;  // The postal code string, e.g., "45897"

    @Property("name")
    private String name;  // Often same as code, but included for completeness

    @Property("degreeCentrality")
    private Double degreeCentrality;

    @Property("wcc_id")
    private Long wccId;

    // Default constructor
    public PostalCode() {}

    // Constructor with fields
    public PostalCode(String code, String name, Double degreeCentrality, Long wccId) {
        this.code = code;
        this.name = name;
        this.degreeCentrality = degreeCentrality;
        this.wccId = wccId;
    }

    // Getters and setters
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Double getDegreeCentrality() { return degreeCentrality; }
    public void setDegreeCentrality(Double degreeCentrality) { this.degreeCentrality = degreeCentrality; }

    public Long getWccId() { return wccId; }
    public void setWccId(Long wccId) { this.wccId = wccId; }
}