package pl.michal.rental;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservationRequest {
    private String carId;
    private ClientData clientData;
    private int days;
}
