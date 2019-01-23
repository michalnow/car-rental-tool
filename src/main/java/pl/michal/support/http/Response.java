package pl.michal.support.http;

public class Response {
    int httpCode;

    boolean isValid(){
        return httpCode >= 200 && httpCode < 400;
    }
}
