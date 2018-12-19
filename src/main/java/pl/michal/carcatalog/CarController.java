package pl.michal.carcatalog;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import pl.michal.services.MapValidationErrorService;

@RestController
@RequestMapping("/api/car")
public class CarController {

	@Autowired
	private CarService carService;

	@Autowired
	private MapValidationErrorService mapValidationErrorService;

	@CrossOrigin
	@PostMapping
	public ResponseEntity<?> createCar(@Valid @RequestBody Car car, BindingResult result) {

		ResponseEntity<?> mapError = mapValidationErrorService.mapValidationService(result);

		if (mapError != null) {
			return mapError;
		}

		carService.saveOrUpdateCar(car);
		return new ResponseEntity<Car>(car, HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public Iterable<Car> getAllCars(){
		return carService.findAll();
	}
	
	
	@GetMapping("/{carIdentifier}")
	public ResponseEntity<?> findCarByIdentifier(@PathVariable String carIdentifier) {
		Car car = carService.findCarByIdentifier(carIdentifier.toUpperCase());
		return new ResponseEntity<Car>(car, HttpStatus.OK);
	}
	
	@DeleteMapping("/{carIdentifier}")
	public ResponseEntity<?> deleteCarByIdentifier(@PathVariable String carIdentifier) {
		carService.deleteCarByIdentifier(carIdentifier.toUpperCase());
		
		return new ResponseEntity<String>("Car with identifier " + carIdentifier.toUpperCase() + " was delelted", HttpStatus.OK);
				
	}
	
	
	
	
	
}
