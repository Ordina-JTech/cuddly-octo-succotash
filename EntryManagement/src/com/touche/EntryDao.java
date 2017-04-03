package com.touche; 

import java.io.File; 
import java.io.FileInputStream; 
import java.io.FileNotFoundException;  
import java.io.FileOutputStream; 
import java.io.IOException; 
import java.io.ObjectInputStream; 
import java.io.ObjectOutputStream; 
import java.util.ArrayList; 
import java.util.List;  

public class EntryDao { 
   public List<Entry> getAllEntries(){ 
      
      List<Entry> entryList = null; 
      try { 
         File file = new File("Entries.dat"); 
         if (!file.exists()) { 
            Entry entry = new Entry(1, "Ralph", 1000000);
            Entry entry2 = new Entry(2, "Dylan", 0);
            entryList = new ArrayList<Entry>(); 
            entryList.add(entry);
            entryList.add(entry2);
            saveEntryList(entryList); 
         } 
         else{ 
            FileInputStream fis = new FileInputStream(file); 
            ObjectInputStream ois = new ObjectInputStream(fis); 
            entryList = (List<Entry>) ois.readObject();
            ois.close();
            fis.close();
         } 
      } catch (IOException e) { 
         e.printStackTrace(); 
      } catch (ClassNotFoundException e) { 
         e.printStackTrace(); 
      }   
      return entryList; 
   } 
   private void saveEntryList(List<Entry> entryList){ 
      try { 
         File file = new File("Entries.dat"); 
         FileOutputStream fos;  
         fos = new FileOutputStream(file); 
         ObjectOutputStream oos = new ObjectOutputStream(fos); 
         oos.writeObject(entryList); 
         oos.close(); 
      } catch (FileNotFoundException e) { 
         e.printStackTrace(); 
      } catch (IOException e) { 
         e.printStackTrace(); 
      } 
   }    
}

