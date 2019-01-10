package pl.michal.przelewy24;

import pl.michal.support.http.HttpClient;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Przelewy24Api {

    private static final String testConnectionUrl = "https://secure.przelewy24.pl/testConnection";
    private HttpClient httpClient;
    private String merchantId;
    private String crc;

    public Przelewy24Api(HttpClient httpClient){
        this.httpClient = httpClient;
    }

    public void testConnection() {

        Map<String,String> params = new HashMap<String,String>();
        params.put("p_24_merchant_id",merchantId);
        params.put("p_24_pos_id",merchantId);
        params.put("p_24_sign",generateP24Md5(Arrays.asList(merchantId,crc)));

        this.httpClient.post(testConnectionUrl,params);

    }

    private String generateP24Md5(List<String> strings){
        return strings.stream().reduce((s,a) -> s + "|" + a).map(Przelewy24Api::calculateMd5).orElse("");
    }

    private static String calculateMd5(String input){
        return String.format("md5_for: %s", input);
    }
}
