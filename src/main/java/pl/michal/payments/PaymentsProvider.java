package pl.michal.payments;


public interface PaymentsProvider {
	String getPaymentUrl(int amount, String description);
}
