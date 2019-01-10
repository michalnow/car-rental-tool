package pl.michal.carcatalog;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CarRepository extends CrudRepository<Car, Long> {
	
	public Car findByCarIdentifier(String carIdenitfier);
	
	@Override
	public Iterable<Car> findAll();
	

}
