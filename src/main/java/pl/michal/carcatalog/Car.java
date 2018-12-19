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
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
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
			@NotNull(message = "must provide year of production") Date yearOfProduction,
			Date addDate
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
	}

	public Car() {}
	
	public Long getId() {
		return id;
	}

	

	public void setId(Long id) {
		this.id = id;
	}

	public String getCarName() {
		return carName;
	}

	public void setCarName(String carName) {
		this.carName = carName;
	}

	public String getCarModel() {
		return carModel;
	}

	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}

	public String getCarIdentifier() {
		return carIdentifier;
	}

	public void setCarIdentifier(String carIdentifier) {
		this.carIdentifier = carIdentifier;
	}

	public String getEngineType() {
		return engineType;
	}

	public void setEngineType(String engineType) {
		this.engineType = engineType;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public String getTypeOfDrive() {
		return typeOfDrive;
	}

	public void setTypeOfDrive(String typeOfDrive) {
		this.typeOfDrive = typeOfDrive;
	}

	public String getTransmission() {
		return transmission;
	}

	public void setTransmission(String transmission) {
		this.transmission = transmission;
	}

	public int getMilage() {
		return milage;
	}

	public void setMilage(int milage) {
		this.milage = milage;
	}

	public Date getYearOfProduction() {
		return yearOfProduction;
	}

	public void setYearOfProduction(Date yearOfProduction) {
		this.yearOfProduction = yearOfProduction;
	}

	public Date getAddDate() {
		return addDate;
	}

	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	@PrePersist
	protected void onCreate() {
		this.addDate = new Date();
	}
	
	
}
