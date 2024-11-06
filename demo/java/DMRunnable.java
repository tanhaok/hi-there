public class DMRunnable {
    public static void main(String ...args) {
        System.out.println("Hi There from " + Thread.currentThread().getName());
        Thread demo = new Thread(new DMRunnable().new RunnableImpl());
        demo.start();
    }

    private class RunnableImpl implements  Runnable {

        @Override
        public void run() {
            System.out.println("Hi There from " + Thread.currentThread().getName());
        }
    }
}
