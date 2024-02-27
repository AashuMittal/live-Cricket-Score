package com.crick.apis.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crick.apis.entities.Match;



public interface MatchRepo extends JpaRepository<Match, Integer> {
	Optional<Match> findByTeamheading(String teamHeading);

}
