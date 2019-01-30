package pl.michal.rental;

public interface OfferMaker {
    Offer generateOffer(String carId, int days);
}
