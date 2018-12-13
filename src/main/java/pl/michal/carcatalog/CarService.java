package pl.michal.carcatalog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import pl.michal.exceptions.CarIdentifierException;


@Service
public class CarService {

	@Autowired
	private CarRepository carRepository;

	public Iterable<Car> findAll() {
		return carRepository.findAll();
	}

	public Car findCarByIdentifier(String carIdentifier) {

		Car car = carRepository.findAllByCarIdentifier(carIdentifier.toUpperCase());

		if (car == null) {
			throw new CarIdentifierException("Car with identifier " + carIdentifier.toUpperCase() + " does not exist");
		}

		return car;
	}

	public Car saveOrUpdateCar(Car car) {
		try {
			car.setCarIdentifier(car.getCarIdentifier().toUpperCase());
			return carRepository.save(car);
		} catch (Exception ex) {
			throw new CarIdentifierException(
					"Car idenetifier" + car.getCarIdentifier().toUpperCase() + " already exist");
		}
	}

	public void deleteCarByIdentifier(String carIdentifier) {
		Car car = carRepository.findAllByCarIdentifier(carIdentifier);

		if (car == null) {
			throw new CarIdentifierException(
					"Cannot delete car with " + carIdentifier + " identifier, because it does not exist");
		}

		carRepository.delete(car);
	}
	
	

}
