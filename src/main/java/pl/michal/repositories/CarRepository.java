package pl.michal.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import pl.michal.entities.Car;

@Repository
public interface CarRepository extends CrudRepository<Car, Long> {
	
	public Car findAllByCarIdentifier(String carIdenitfier);
	
	@Override
	public Iterable<Car> findAll();
	

}
