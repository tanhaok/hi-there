import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class DMThreadPool{
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(3); // Create a pool of 3 threads

        for (int i = 0; i < 5; i++) {
            Runnable task = new Task(i);
            executorService.submit(task); // Submitting each task to the thread pool
        }

        executorService.shutdown(); // Gracefully shutdown the executor
    }
}

class Task implements Runnable {
    private final int taskId;

    public Task(int taskId) {
        this.taskId = taskId;
    }

    @Override
    public void run() {
        System.out.println("Executing Task ID : " + taskId + " - Thread: " + Thread.currentThread().getName());
    }
}