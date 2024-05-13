#include <stdio.h>
#include <stdlib.h>
#include <omp.h>
#include <time.h>

float calculateSum(float *array, int size)
{
    float sumResult = 0.0;
    // replace this line with a suitable omp pragma
    //#pragma omp parallel for
    for (int i = 0; i < size; i++)
    {
        sumResult += array[i];
    }
    return sumResult;
}

int main()
{
    int size = 1000000;
    float *arr1 = (float *)malloc(size * sizeof(float));
    float sum_result;
    if (arr1 == NULL)
    {
        printf("Memory allocation failed.\n");
        return 1;
    }

    // Start the timer
    clock_t start = clock();

    for (int i = 0; i < size; i++)
    {
        arr1[i] = i + 1;
    }

    sum_result = calculateSum(arr1, size);
    // Stop the timer
    clock_t end = clock();
    double cpu_time_used = ((double)(end - start)) / CLOCKS_PER_SEC;

    // Printing a few elements as an example
    printf("Sum: ");
    printf("%f ", sum_result);
    printf("\n");

    printf("Time taken: %f seconds\n", cpu_time_used);

    free(arr1);
    return 0;
}
