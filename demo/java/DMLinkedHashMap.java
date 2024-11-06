import java.util.LinkedHashMap;

public class DMLinkedHashMap {
    public static void main(String[] args) {
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        map.put("english", "Hello");
        map.put("french", "Bonjour");
        map.put("spanish", "Hola");
        map.put("german", "Hallo");
        map.put("italian", "Ciao");
        
        for(var entry : map.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }
}
