package com.crick.apis.controller;

import java.util.List;


import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crick.apis.entities.Match;
import com.crick.apis.service.MatchService;

@RestController
@RequestMapping("/match")

public class MatchController {
    public MatchService matchservice;

	public MatchController(MatchService matchservice) {
		
		this.matchservice = matchservice;
	}
    
	@GetMapping("/live")
	public ResponseEntity<List<Match>> getLiveMatches(){
		return new ResponseEntity<>(matchservice.liveMatches(),HttpStatus.OK);
		
	}
	@GetMapping("/update")
	public ResponseEntity<List<Match>> getAllMatches(){
		return new ResponseEntity<>(matchservice.getAllMatch(),HttpStatus.OK);
	}
	@GetMapping("/point-table")
	public ResponseEntity<?> getMatchTable(){
		return new ResponseEntity<>(matchservice.getpointTable(),HttpStatus.OK);
	}
}
