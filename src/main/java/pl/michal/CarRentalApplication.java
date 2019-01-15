package pl.michal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import pl.michal.carcatalog.Car;
import pl.michal.carcatalog.CarRepository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


@SpringBootApplication
public class CarRentalApplication {

	@Autowired
	CarRepository repo;

	@Component
	private class DevFixtures implements CommandLineRunner{

		String pattern = "yyyy-mm-dd";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		Date date;

		{
			try {
				date = simpleDateFormat.parse("2019-01-30");
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}


		@Override
		public void run(String... args) throws Exception {
			repo.save(Car.builder().carName("Ferrari").carIdentifier("KR 72AXC")
					.carModel("F50").engineType("V8").fuelType("Petrol").milage(543212)
					.rating(10).transmission("sequential").typeOfDrive("RWD").yearOfProduction(date).isRented("no").noOfSeats(4).trunk(100).build());

			repo.save(Car.builder().carName("Audi").carIdentifier("KR 872HG")
					.carModel("A4").engineType("2.0").fuelType("Petrol").milage(75241)
					.rating(8).transmission("manual").typeOfDrive("RWD").yearOfProduction(date).isRented("no").noOfSeats(5).trunk(300).build());


			repo.save(Car.builder().carName("Skoda").carIdentifier("KR OKUT2")
					.carModel("Fabia").engineType("1,4").fuelType("Gas").milage(128754)
					.rating(6).transmission("manual").typeOfDrive("FWD").yearOfProduction(date).isRented("no").noOfSeats(5).trunk(420).build());

			repo.save(Car.builder().carName("Mercedes").carIdentifier("KR HYE12")
					.carModel("Benz C").engineType("V6").fuelType("Petrol").milage(98521)
					.rating(10).transmission("Automatic").typeOfDrive("RWD").yearOfProduction(date).isRented("no").noOfSeats(4).trunk(200).build());

		}
	}
	public static void main(String[] args) {
		SpringApplication.run(CarRentalApplication.class, args);
	}
}
