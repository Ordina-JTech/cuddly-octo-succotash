package com.touche;  

import java.io.Serializable;  
import javax.xml.bind.annotation.XmlElement; 
import javax.xml.bind.annotation.XmlRootElement; 
@XmlRootElement(name = "entry") 

public class Entry implements Serializable {  
   private static final long serialVersionUID = 1L; 
   private int id; 
   private String name; 
   private int score;  
   public Entry(){} 
    
   public Entry(int id, String name, int score){  
      this.id = id; 
      this.name = name; 
      this.score = score; 
   }  
   public int getId() { 
      return id; 
   }  
   @XmlElement 
   public void setId(int id) { 
      this.id = id; 
   } 
   public String getName() { 
      return name; 
   } 
   @XmlElement
   public void setName(String name) { 
      this.name = name; 
   } 
   public int getScore() { 
      return score; 
   } 
   @XmlElement 
   public void setScore(int score) { 
      this.score = score; 
   }   
} 