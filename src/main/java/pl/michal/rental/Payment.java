package pl.michal.rental;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Payment {
    private String id;
    private String finalUrl;

    public String getFinalUrl() {
        return finalUrl;
    }
}
