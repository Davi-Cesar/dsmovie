package com.devsuperior.dsmovie.enteties;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK id = new ScorePK(); // Quando instanciamos uma chave composta temos que da o new para garantir sua criação
	private Double value;
	
	
	public Score() {
		
	}
	
	
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	
	public void setUser(User user) {
		id.setUser(user);
	}
	
	
	public ScorePK getId() {
		return id;
	}


	public void setId(ScorePK id) {
		this.id = id;
	}


	public Double getValue() {
		return value;
	}


	public void setValue(Double value) {
		this.value = value;
	}
	
	
}
