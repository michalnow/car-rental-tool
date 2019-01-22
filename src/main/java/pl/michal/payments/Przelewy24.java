package pl.michal.payments;

import java.net.URLEncoder;
import java.util.Map;
import java.io.UnsupportedEncodingException;

public class Przelewy24 implements PaymentsProvider {
    private String merchantId;
    private String crc;

    public Przelewy24(String merchantId, String crc){
	    this.merchantId = merchantId;
	    this.crc = crc;
    }

    @Override
    public String getPaymentUrl(int paymentAmount, String description)
    {
	    // Expects amount to be in polski grosz.
	    String baseUrl = "https://sklep.przelewy24.pl/zakup.php";
	    String merchantId = "z24_id_sprzedawcy=" + this.merchantId;
	    String crc = "z24_crc=" + this.crc;
	    String amount = "z24_kwota=" + Integer.toString(paymentAmount);
	    try{
		    String name = "z24_nazwa+" + URLEncoder.encode(description, "UTF-8");
		return String.join("&", baseUrl, merchantId, crc, amount, name);
	    } catch(UnsupportedEncodingException e){
		    return null;
	    }
    }

}
