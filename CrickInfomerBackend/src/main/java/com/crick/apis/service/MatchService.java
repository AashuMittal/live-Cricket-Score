package com.crick.apis.service;

import java.util.*;



import com.crick.apis.entities.Match;

public interface MatchService {

	List<Match> getAllMatch();
	List<Match> liveMatches();
	
	List<String> getpointTable();
	
}
