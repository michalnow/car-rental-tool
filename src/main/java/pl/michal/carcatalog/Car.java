package pl.michal.carcatalog;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.aspectj.weaver.ast.Not;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
public class Car {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="car name must be provided")
	private String carName;
	
	@NotBlank(message="car model must be provided")
	private String carModel;
	
	@NotBlank(message="must provide register number(8 characters)")
	@Column(updatable=false, unique = true)
	@Size(min=8,max=8)
	private String carIdentifier;
	
	@NotBlank(message="provide enginge type")
	private String engineType;
	
	@NotBlank(message="must provide  fuel type")
	private String fuelType;
	
	@NotBlank(message="must provide type of drive")
	private String typeOfDrive;
	
	@NotBlank(message="must proivde type of transmission")
	private String transmission;
	
	@NotNull(message="must provide milage of car")
	private int milage;

	private double rating;

	@NotNull(message = "must provide whether the car is rented now or not")
	@Pattern(regexp = "^(?:yes|no)$")
	private String isRented;

	@NotNull(message = "must provide number of seats")
	private int noOfSeats;

	@NotNull(message = "must provide capacity of trunk")
	private int trunk;
	
	@NotNull(message="must provide year of production")
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date yearOfProduction;
	
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date addDate;

	public Car(
			@NotBlank(message = "car name must be provided") String carName,
			@NotBlank(message = "car model must be provided") String carModel,
			@NotBlank(message = "must provide register number(8 characters)")
			@Size(min = 8, max = 8) String carIdentifier,
			@NotBlank(message = "provide enginge type") String engineType,
			@NotBlank(message = "must provide  fuel type") String fuelType,
			@NotBlank(message = "must provide type of drive") String typeOfDrive,
			@NotBlank(message = "must proivde type of transmission") String transmission,
			@NotNull(message = "must provide milage of car") int milage,
			double rating,
			@NotBlank(message = "must provide year of production") Date yearOfProduction,
			Date addDate,
			@NotBlank(message = "must provide whether the car is rented now or not") String isRented,
			@NotBlank(message = "must provide number of seats") int noOfSeats,
			@NotBlank(message = "must provide capacity of car trunk") int trunk

			)
	{
		this.carName = carName;
		this.carModel = carModel;
		this.carIdentifier = carIdentifier;
		this.engineType = engineType;
		this.fuelType = fuelType;
		this.typeOfDrive = typeOfDrive;
		this.transmission = transmission;
		this.milage = milage;
		this.rating = rating;
		this.yearOfProduction = yearOfProduction;
		this.addDate = addDate;
		this.isRented = isRented;
		this.noOfSeats = noOfSeats;
		this.trunk = trunk;
	}

	public Car() {}


	@PrePersist
	protected void onCreate() {
		this.addDate = new Date();
	}
	
	
}
