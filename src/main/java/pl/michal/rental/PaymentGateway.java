package pl.michal.rental;

public interface PaymentGateway {
    public Payment registerPayment(String reservationId, ClientData clientData, double offerValue);
}
