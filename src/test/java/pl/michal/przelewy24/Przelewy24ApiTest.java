package pl.michal.przelewy24;

import org.junit.Assert;
import org.junit.Test;
import pl.michal.support.http.HttpClient;
import pl.michal.support.http.Response;

import java.util.Map;

public class Przelewy24ApiTest {
    SpyHttpClient httpClient = new SpyHttpClient();
    String crc_value = "crc_value";
    String merchantId = "123456";

    @Test
    public void itTestConection(){

        Przelewy24Api api = thereIsPrzelewy24ApiConfigured();

        api.testConnection();

        Assert.assertTrue(httpClient.lastUrl.equals("https://secure.przelewy24.pl/testConnection"));
        Assert.assertTrue(httpClient.lastParams.containsKey("p24_merchant_id"));
        Assert.assertTrue(httpClient.lastParams.containsKey("p24_pos_id"));
        Assert.assertTrue(httpClient.lastParams.containsKey("p24_sign"));

        Assert.assertTrue(httpClient.lastParams.get("p24_sign").equals("6E3943B584D64AB88C1CB488FB24DF89"));


        Assert.assertTrue(httpClient.lastParams.get("p24_merchant_id").equals(merchantId));
        Assert.assertTrue(httpClient.lastParams.get("p24_sign").equals(crc_value));

    }

    private Przelewy24Api thereIsPrzelewy24ApiConfigured() {
        return new Przelewy24Api(httpClient);
    }

    @Test
    public void itRegisterTransaction(){

    }

    private class SpyHttpClient implements HttpClient{

        public Map<String,String> lastParams;
        public String lastUrl;

        @Override
        public Response post(String url, Map<String, String> params) {
            lastParams = params;
            lastUrl = url;

            return new Response();
        }
    }
}
