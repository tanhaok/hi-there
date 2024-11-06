import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class DMCompletableFuture {
    public static void main(String[] args) {
        CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
            System.out.println("Task running asynchronously - Thread: " + Thread.currentThread().getName());
        });

        CompletableFuture<Integer> futureWithResult = CompletableFuture.supplyAsync(() -> {
            int result = 10 * 10;
            System.out.println("Calculating result asynchronously - Thread: " + Thread.currentThread().getName());
            return result;
        });

        try {
            // Blocks to get the result of the future
            future.get(); // Waits until the first task completes
            System.out.println("Computation Result: " + futureWithResult.get()); // Gets the result of the second task
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}