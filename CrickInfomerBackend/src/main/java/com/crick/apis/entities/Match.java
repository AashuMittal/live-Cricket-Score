package com.crick.apis.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="crick_matches")
public class Match {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int matchId;
	private String teamheading;
	private String matchNumberVenue;
	private String battingTeam;
	
	private String battingTeamScore;
	private String bowlTeam;
	private String liveText;
	private String matchlink;
	private String textComplete;
	
	@Enumerated
	private MatchStatus status;
	public int getMatchId() {
		return matchId;
	}
	public void setMatchId(int matchLink2) {
		this.matchId = matchLink2;
	}
	public String getTeamheading() {
		return teamheading;
	}
	public void setTeamheading(String teamheading) {
		this.teamheading = teamheading;
	}
	public String getMatchNumberVenue() {
		return matchNumberVenue;
	}
	public void setMatchNumberVenue(String matchNumberVenue) {
		this.matchNumberVenue = matchNumberVenue;
	}
	public String getBattingTeam() {
		return battingTeam;
	}
	public void setBattingTeam(String battingTeam) {
		this.battingTeam = battingTeam;
	}
	public String getBattingTeamScore() {
		return battingTeamScore;
	}
	public void setBattingTeamScore(String battingTeamScore) {
		this.battingTeamScore = battingTeamScore;
	}
	public String getBowlTeam() {
		return bowlTeam;
	}
	public void setBowlTeam(String bowlTeam) {
		this.bowlTeam = bowlTeam;
	}
	public String getLiveText() {
		return liveText;
	}
	public void setLiveText(String liveText) {
		this.liveText = liveText;
	}
	public String getMatchlink() {
		return matchlink;
	}
	public void setMatchlink(String matchlink) {
		this.matchlink = matchlink;
	}
	public String getTextComplete() {
		return textComplete;
	}
	public void setTextComplete(String textComplete) {
		this.textComplete = textComplete;
	}
	public MatchStatus getStatus() {
		return status;
	}
	public void setStatus(MatchStatus status) {
		this.status = status;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
	public Match() {
		
	}
	public void setMatchStatus() {
		if(textComplete.isBlank()) {
			this.status=MatchStatus.LIVE;
		}
		else {
			this.status=MatchStatus.COMPLETE;
		}
	}
	public Match(int matchId, String teamheading, String matchNumberVenue, String battingTeam, String battingTeamScore,
			String bowlTeam, String liveText, String matchlink, String textComplete, MatchStatus status, Date date) {
		super();
		this.matchId = matchId;
		this.teamheading = teamheading;
		this.matchNumberVenue = matchNumberVenue;
		this.battingTeam = battingTeam;
		this.battingTeamScore = battingTeamScore;
		this.bowlTeam = bowlTeam;
		this.liveText = liveText;
		this.matchlink = matchlink;
		this.textComplete = textComplete;
		this.status = status;
		this.date = date;
	}
	private Date date=new Date(matchId);
	
}
