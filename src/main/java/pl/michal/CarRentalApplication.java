package pl.michal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import pl.michal.carcatalog.Car;
import pl.michal.carcatalog.CarRepository;


@SpringBootApplication
public class CarRentalApplication {

	@Autowired
	CarRepository repo;

	@Component
	private class DevFixtures implements  CommandLineRunner{

		@Override
		public void run(String... args) throws Exception {
			//repo.save(Car.builder()
				//	.name("sadsda")
				//	.age(29)
					//.asd
					//.build());
		}
	}
	public static void main(String[] args) {
		SpringApplication.run(CarRentalApplication.class, args);
	}
}
