package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.*;
import javax.ws.rs.POST;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import org.springframework.util.MimeType;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import hello.Score;
import hello.ScoreDao;
import java.util.List;

@RestController
public class ScoreController {
	private static final String template = "Hello, %s!";
	private final int counter = (int) (Math.random() * 8500);
    private Score score;
    ScoreDao scoreDao = new ScoreDao();

//	@RequestMapping("/scores")
//	public Score greeting(String name) {
//		return scoreDao.score;
//	}
    
    @RequestMapping(value = "/get", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<Score> getScoreList() {
        return scoreDao.getAllScores();
    }
    @POST
    @RequestMapping("/post")
    @Consumes(MediaType.APPLICATION_JSON)
    @ResponseBody
    public void setScores(String name, int scores) {
        
        scoreDao.saveScore(name, scores);
        
    }
}