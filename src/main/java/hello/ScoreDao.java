package hello;

import java.io.File; 
import java.io.FileInputStream; 
import java.io.FileNotFoundException;  
import java.io.FileOutputStream; 
import java.io.IOException; 
import java.io.ObjectInputStream; 
import java.io.ObjectOutputStream; 
import java.util.ArrayList; 
import java.util.List;
import hello.Score;

public class ScoreDao {
    Score score;
    List<Score> scoreList;
    
    public List<Score> getAllScores() {       
        File file = new File("Scores.txt");
        try{
            
            if(!file.exists()) {
                scoreList = new ArrayList<Score>();
                saveScoreList(scoreList);
            }
            else {
                FileInputStream fis = new FileInputStream(file);
                ObjectInputStream ois = new ObjectInputStream(fis);
                scoreList = (List<Score>) ois.readObject();
                fis.close();
                ois.close();
            }   
        } catch (IOException e) { 
         e.printStackTrace(); 
      } catch (ClassNotFoundException e) { 
         e.printStackTrace(); 
      }
        return scoreList;
    }
    private void saveScoreList(List<Score> scoreList) {
        File file = new File("Scores.txt");
        try {
            FileOutputStream fos = new FileOutputStream(file);
            ObjectOutputStream oos = new ObjectOutputStream(fos);
            oos.writeObject(scoreList);
            
            oos.close();
            fos.close();
        }catch (FileNotFoundException e) { 
         e.printStackTrace(); 
      } catch (IOException e) { 
         e.printStackTrace(); 
      } 
    }
    public void saveScore(String name, int scores) {
        score = new Score(name, scores);
        scoreList = getAllScores();
        scoreList.add(score);
        
        saveScoreList(scoreList);
        
    }
    
    
    
}