package pl.michal.rental;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Reservation {
    String id;
    String carId;
    int days;
    double price;
    Payment payment;
}
