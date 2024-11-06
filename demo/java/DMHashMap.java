import java.util.*;

public class DMHashMap {
    public static void main(String[] args) {
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("english", "Hello");
        map.put("french", "Bonjour");
        map.put("spanish", "Hola");
        map.put("german", "Hallo");
        map.put("italian", "Ciao");

        map.put("english", "Hi"); // Update value for key "english"
        
        for(var entry : map.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }

    public void MakeSynchronziedMap(){
        Map map = Collections.synchronizedMap(new HashMap<String, String>());
    }
}
