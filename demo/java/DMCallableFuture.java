import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class DMCallableFuture {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newSingleThreadExecutor();

        Callable<Integer> callableTask = () -> {
            int sum = 0;
            for (int i = 1; i <= 10; i++) {
                sum += i;
            }
            return sum; // Returns the result of the computation
        };

        Future<Integer> futureResult = executorService.submit(callableTask); // Submit the Callable task

        try {
            Integer result = futureResult.get(); // Blocking call to retrieve the result
            System.out.println("Sum of numbers from 1 to 10: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            executorService.shutdown();
        }
    }
}
