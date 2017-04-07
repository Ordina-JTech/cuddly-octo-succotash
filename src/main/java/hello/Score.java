package hello;

import javax.xml.bind.annotation.XmlElement; 
import javax.xml.bind.annotation.XmlRootElement; 
import java.io.Serializable;
import hello.Score;

public class Score implements Serializable{
    private static final long serialVersionUID = 1L;
	private String name;
	private int score;
	
	public Score(String name, int score) {
		this.name = name;
		this.score = score;
	}
    public Score(){
        
    }
	public String getName() {
		return name;
	}
	public int getScore() {
		return score;
	}
    public void setName(String name) {
        this.name = name;
    }
    public void setScore(int score) {
        this.score = score;
    }


}