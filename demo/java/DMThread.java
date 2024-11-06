public class DMThread extends Thread {
    @Override
    public void run() {
        System.out.println("Hello from: " + currentThread().getName());
    }

    public static void main(String ...args) {
        var thread1 = new DMThread();
        var thread2 = new DMThread();

        thread1.start();
        thread2.start();

    }
}
